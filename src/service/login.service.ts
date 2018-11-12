import * as firebase from "firebase";
import { Component, OnInit, Injectable } from "@angular/core";
// import { ActivatedRoute } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";

@Injectable()
export class LoginService {
    private _loggedInUser: Observable<firebase.User>;

    constructor(private _auth: AngularFireAuth){
        this._loggedInUser = _auth.authState;
    }

    public getLoggedInUser(): Observable<firebase.User>{
        return this._loggedInUser;
    }

    public login(): Promise<any> {
        return this._auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .catch(error => console.log(error.message));
    }

    public logout() {
        return this._auth.auth.signOut()
            .catch(error => console.log(error.message));
    }
}