import { Component } from '@angular/core';

@Component({
  selector: "gw-login",
  templateUrl: "./login.component.html",
  styleUrls: [
      './login.component.scss'
  ]

})
export class LoginComponent {
  public loginComp: string = "Welcome to the login component";
}