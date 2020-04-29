import { Component } from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  showParagraph = false;
  logs = [];

  onDisplayDetails() {
    this.showParagraph = !this.showParagraph;
    this.logs.push({
      index: this.logs.length + 1,
      showParagraph: this.showParagraph,
      log: `${moment().format("YYYY-MM-DD HH:mm:ss")} Paragraph is ${
        this.showParagraph ? "showing" : "hidden"
      }`,
    });
  }

  getColor(log) {
    return log.index > 4 ? "blue" : "white";
  }
}
