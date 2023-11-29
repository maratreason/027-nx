import {ChangeDetectionStrategy, Component, inject} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CreateUsersDialogComponent} from "../create-users-dialog/create-users-dialog.component";
import {UsersFacade, CreateUsersDTO} from "@users/users/data-access";

@Component({
  selector: "create-users-button",
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: "./create-users-button.component.html",
  styleUrl: "./create-users-button.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUsersButtonComponent {
  private readonly usersFacade = inject(UsersFacade);
  private name!: string;
  private email!: string;
  public dialog = inject(MatDialog);

  openAddUserDialog() {
    const dialogRef: MatDialogRef<CreateUsersDialogComponent> =
      this.dialog.open(CreateUsersDialogComponent, {
        data: {name: this.name, email: this.email},
      });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const newUserData: CreateUsersDTO = {
          name: result.name,
          email: result.email,
          username: result.username,
          city: "Kazan",
        };

        this.usersFacade.createUser(newUserData);
      }
    });
  }
}
