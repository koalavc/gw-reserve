import * as firebase from "firebase";
import { Component } from "@angular/core";
// import { ActivatedRoute } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable"; 
import { Router } from "@angular/router";

import { LoginService } from "../../../service/login.service";

@Component({
  selector: "gw-login",
  templateUrl: "./login.component.html",
  styleUrls: [
      './login.component.scss'
  ]

})
export class LoginComponent{

  // public userObservable: Observable<firebase.User>
  public loggedInUser;
  
  constructor(private _loginService: LoginService){
    this._loginService.getLoggedInUser()
      .map(user => {
        if(!user) {
          return
        };

        return {
          displayName: user.displayName,
          photoURL: user.photoURL
        };
      })
      
      .subscribe(user => {
        this.loggedInUser = user;
        console.log('logged in user ', this.loggedInUser);
      })
  }

  public login() {
    this._loginService.login();
    this.loggedInUser = console.log('#########logged in');
  }

  public logout(){
    this._loginService.logout();
    this.loggedInUser = console.log('#########logged out');
  }
}

