import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-odd",
  templateUrl: "./odd.component.html",
  styleUrls: ["./odd.component.css"],
})
export class OddComponent implements OnInit {
  @Input() numObj: { number: number; isOdd: boolean };

  constructor() {
  }

  ngOnInit(): void {}
}
