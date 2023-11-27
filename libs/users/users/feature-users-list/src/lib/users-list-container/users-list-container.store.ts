import {inject, Injectable} from "@angular/core";
import {ComponentStore} from "@ngrx/component-store";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {tap} from "rxjs";

import {UsersEntity, UsersFacade} from "@users/users/data-access";
import {DeepReadonly} from "@users/core/utils";
import {UsersVM} from "../users-vm";
import {UsersVMAdapter} from "../users-vm.adapter";
import {DeleteUsersDialogComponent} from "../delete-users-dialog/delete-users-dialog.component";

type UsersListState = DeepReadonly<{
  users: UsersVM[];
}>;

const initialState: UsersListState = {
  users: [],
};

@Injectable()
export class UsersListContainerStore extends ComponentStore<UsersListState> {
  private readonly usersFacade = inject(UsersFacade);
  private readonly dialog = inject(MatDialog);
  public readonly users$ = this.select(({users}) => users); // this.select(state => state.users);
  public readonly status$ = this.select(
    this.usersFacade.status$,
    status => status
  );

  constructor() {
    super(initialState);

    this.usersFacade.init();
    this.setUsersFromGlobalToLocalStore();
  }

  private setUsersFromGlobalToLocalStore(): void {
    this.effect(() =>
      this.usersFacade.allUsers$.pipe(
        tap((users: UsersEntity[]) => this.patchUsers(users))
      )
    );
  }

  private patchUsers(users: UsersEntity[]): void {
    this.patchState({
      users: users.map((user) => UsersVMAdapter.entityToVM(user)),
    });
  }

  public deleteUser(user: UsersVM): void {
    const dialogRef: MatDialogRef<DeleteUsersDialogComponent> =
      this.dialog.open(DeleteUsersDialogComponent, {
        data: {name: user.name},
      });

    this.effect(() =>
      dialogRef.afterClosed().pipe(
        tap((result: boolean) => {
          if (result) this.usersFacade.deleteUser(user.id);
        })
      )
    );
  }

}
