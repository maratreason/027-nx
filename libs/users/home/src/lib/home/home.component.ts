import {ChangeDetectionStrategy, Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UsersListContainerComponent} from "@users/feature-users";

@Component({
  selector: "users-home",
  standalone: true,
  imports: [CommonModule, UsersListContainerComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
}
