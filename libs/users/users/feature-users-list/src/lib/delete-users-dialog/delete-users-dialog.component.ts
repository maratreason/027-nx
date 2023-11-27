import {ChangeDetectionStrategy, Component, inject} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatDialogModule, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: "delete-users-dialog",
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: "./delete-users-dialog.component.html",
  styleUrl: "./delete-users-dialog.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteUsersDialogComponent {
  public data: {name: string} = inject(MAT_DIALOG_DATA);
}
