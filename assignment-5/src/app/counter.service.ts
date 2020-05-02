export class CounterService {
  activeCount = 0;
  inactiveCount = 0;

  triggerActiveCount() {
    this.activeCount++;
    console.log("Active to Inactive : ", this.activeCount);
    return this.activeCount;
  }

  triggerInActiveCount() {
    this.inactiveCount++;
    console.log("Inctive to Active : ", this.inactiveCount);
    return this.inactiveCount;
  }
}
