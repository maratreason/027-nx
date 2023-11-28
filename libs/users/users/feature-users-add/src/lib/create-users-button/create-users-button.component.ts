import {ChangeDetectionStrategy, Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: "create-users-button",
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: "./create-users-button.component.html",
  styleUrl: "./create-users-button.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUsersButtonComponent {}
