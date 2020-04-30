import { Component, Input, EventEmitter } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  numbers = [];

  constructor() {}

  ngOnInit(): void {}

  setNumber(event: { number: number; isOdd: boolean }) {
    this.numbers.push(event);
  }
}
