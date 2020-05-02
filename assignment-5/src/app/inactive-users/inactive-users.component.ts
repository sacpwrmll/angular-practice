import { Component, EventEmitter, Input, Output } from "@angular/core";
import { AppComponent } from "../app.component";

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"],
})
export class InactiveUsersComponent {
  @Input() users: string[];

  constructor(private appComponent: AppComponent) {}
  onSetToActive(id: number) {
    this.appComponent.onSetToActive(id);
  }
}
