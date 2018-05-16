import * as firebase from 'firebase';

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { take } from "rxjs/operators";

@Component({
    selector: "gw-welcome",
    templateUrl: "./welcome.component.html",
    styleUrls: [
        './welcome.component.scss'
    ]
})

export class WelcomeComponent{
    public welcomeComp: string = 'Welcome to the welcome component';
}

// this._auth.auth.signInWithPopUp(new firebase.auth.GoogleAuthProvider);

//constructor(private _activatedRoute: ActivatedRoute, private _auth: AngularFireAuth)

// ngOnInit(){
//      this._auth.auth.sign
//}