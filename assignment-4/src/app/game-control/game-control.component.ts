import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  intervalID = null;
  numbers: number = 1;
  @Output() numberSet = new EventEmitter<{ number: number; isOdd: boolean }>();

  constructor() {}

  ngOnInit(): void {}

  startGame() {
    this.intervalManager(
      true,
      () => {
        if (this.numbers % 2 == 0) {
          this.numberSet.emit({ number: this.numbers, isOdd: false });
        } else {
          this.numberSet.emit({ number: this.numbers, isOdd: true });
        }
        this.numbers++;
      },
      1000
    );
    console.log("Game Started");
  }

  stopGame() {
    this.intervalManager(false, () => {}, 100);
    console.log("Game Stoped");
  }

  intervalManager(flag, cb, time) {
    if (flag) this.intervalID = setInterval(cb, time);
    else clearInterval(this.intervalID);
  }
}
