import {Component} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FooterComponent, HeaderComponent} from "@users/core/ui/layout";

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  selector: "users-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  providers: []
})
export class AppComponent {
}
