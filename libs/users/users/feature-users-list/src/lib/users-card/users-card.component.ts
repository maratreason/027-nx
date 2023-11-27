import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UsersVM} from "../users-vm";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: "users-card",
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: "./users-card.component.html",
  styleUrl: "./users-card.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersCardComponent {
  @Input({required: true}) user!: UsersVM;

  @Output() deleteUser = new EventEmitter();

  public onDeleteUser() {
    this.deleteUser.emit();
  }
}
