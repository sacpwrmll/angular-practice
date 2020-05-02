import { Component, OnInit } from "@angular/core";
import { UsersService } from "./users.service";
import { CounterService } from "./counter.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];
  activeCount = 0;
  inactiveCount = 0;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
    this.activeCount = this.userService.activeCount;
    this.inactiveCount = this.userService.inactiveCount;
  }

  onSetToInactive(id: number) {
    this.userService.onSetInactive(id);
    this.activeCount = this.userService.activeCount;
    this.inactiveCount = this.userService.inactiveCount;
  }

  onSetToActive(id: number) {
    this.userService.onSetActive(id);
    this.activeCount = this.userService.activeCount;
    this.inactiveCount = this.userService.inactiveCount;
  }
}
