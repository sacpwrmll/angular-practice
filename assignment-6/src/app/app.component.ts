import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  subscriptions = ["Advanced", "Pro", "Basic"];
  defaultSubscriptions = "Advanced";
  user = {
    email: "",
    subScriptions: "",
    password: "",
  };
  @ViewChild("f", { static: false }) signupForm: NgForm;
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.user.email = this.signupForm.value.email;
    this.user.subScriptions = this.signupForm.value.subScriptions;
    this.user.password = this.signupForm.value.password;

    this.signupForm.reset();
    console.log(this.user)
  }
}
