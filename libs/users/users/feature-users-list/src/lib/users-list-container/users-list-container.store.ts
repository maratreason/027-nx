import {inject, Injectable} from "@angular/core";
import {ComponentStore} from "@ngrx/component-store";
import {UsersEntity, UsersFacade} from "@users/users/data-access";
import {DeepReadonly} from "@users/core/utils";
import {UsersVM} from "../users-vm";
import {tap} from "rxjs";
import {UsersVMAdapter} from "../users-vm.adapter";

type UsersListState = DeepReadonly<{
  users: UsersVM[];
}>;

const initialState: UsersListState = {
  users: [],
};

@Injectable()
export class UsersListContainerStore extends ComponentStore<UsersListState> {
  public readonly users$ = this.select(({users}) => users); // this.select(state => state.users);
  private readonly usersFacade = inject(UsersFacade);
  public readonly status$ = this.select(
    this.usersFacade.status$,
    status => status
  );

  // еще можно сделать так ↑
  // public readonly status$ = this.select(
  //   this.users$,
  //   this.usersFacade.status$,
  //   (users, status) => status
  // );

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
}
