import * as firebase from "firebase";
import { Component, OnInit } from "@angular/core";
// import { ActivatedRoute } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "gw-login",
  templateUrl: "./login.component.html",
  styleUrls: [
      './login.component.scss'
  ]

})
export class LoginComponent {

  public userObservable: Observable<firebase.User>
  
  constructor(private _auth: AngularFireAuth){

  }

  public ngOnInit(){
    this.userObservable = this._auth.authState;

    this.userObservable.subscribe(user => console.log(user));
  }

  public login(event){
    // console.log('the yee old');
    this._auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

  }

  public logout(event){
    this._auth.auth.signOut();
  }
}

