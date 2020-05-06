import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;
  avoidProjectNames = ["Test"];
  projectstatuslist = ["Stable", "Critical", "Finished"];
  allowEnable = false;
  constructor() {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      projectname: new FormControl(null, [
        Validators.required,
        this.forbiddenNames.bind(this),
      ]),
      email: new FormControl(
        null,
        [Validators.required, Validators.email],
        this.forbiddenEmails.bind(this)
      ),
      projectstatus: new FormControl("Stable"),
    });

    this.signupForm.valueChanges.subscribe((value) => {
      this.allowEnable = this.signupForm.valid;
    });
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.avoidProjectNames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test@test.com") {
          this.allowEnable = false;
          resolve({ emailIsForbidden: true });
        } else {
          this.allowEnable = true;
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.signupForm.value);
    this.signupForm.reset();
  }
}
