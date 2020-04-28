import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  allowEnable = false;

  constructor() {}

  ngOnInit(): void {}

  onUpdateUserName(event: Event) {
    let value = (<HTMLInputElement>event.target).value;
    if (value == '') {
      this.allowEnable = false;
      this.username = '';
    } else {
      this.username = value;
      this.allowEnable = true;
    }
  }

  onButtonClick() {
    this.username = '';
  }
}
