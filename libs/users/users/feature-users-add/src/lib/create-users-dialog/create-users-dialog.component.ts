import {ChangeDetectionStrategy, Component, inject} from "@angular/core";
import {CommonModule} from "@angular/common";
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import {UsersEntity, UsersFacade} from "@users/users/data-access";

@Component({
  selector: "users-create-users-dialog",
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./create-users-dialog.component.html",
  styleUrl: "./create-users-dialog.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUsersDialogComponent {
  public data: {name: string} = inject(MAT_DIALOG_DATA);
  public dialogRef = inject(MatDialogRef<CreateUsersDialogComponent>);

  public form = new FormGroup({
    name: new FormControl("", [Validators.required]),
    username: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
  });

  submitForm() {
    const {name, email, username} = this.form.value;

    const formData = {
      name,
      username,
      email,
    };

    this.dialogRef.close(formData);
  }
}
