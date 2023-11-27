import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UsersListVM} from "./users-list-vm";
import {UsersCardComponent} from "../users-card/users-card.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {UsersVM} from "../users-vm";

@Component({
  selector: "users-list-ui",
  standalone: true,
  imports: [
    CommonModule,
    UsersCardComponent,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    UsersCardComponent,
  ],
  templateUrl: "./users-list.component.html",
  styleUrl: "./users-list.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  @Input({required: true}) vm!: UsersListVM;

  @Output() deleteUser = new EventEmitter();

  onDeleteUser(user: UsersVM) {
    this.deleteUser.emit(user);
  }
}
