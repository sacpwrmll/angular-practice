import { CounterService } from "./counter.service";
import { Injectable } from "@angular/core";

@Injectable()
export class UsersService {
  activeUsers = ["Max", "Anna"];
  inactiveUsers = ["Chris", "Manu"];
  activeCount = 0;
  inactiveCount = 0;

  constructor(private counterService: CounterService) {
    this.activeCount = counterService.activeCount;
    this.inactiveCount = counterService.inactiveCount;
  }

  onSetInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.activeCount = this.counterService.triggerActiveCount();
  }

  onSetActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.inactiveCount = this.counterService.triggerInActiveCount();
  }
}
