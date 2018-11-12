import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { LoginService } from "./login.service";
import { map } from "rxjs/operators";

@Injectable()
export class LoginGuardService implements CanActivate {
    constructor(private _login: LoginService){}

    canActivate(): boolean | Observable<boolean> | Promise<boolean> {
        // throw new Error("Method not implemented.");
        return true;
        // return this._login.getLoggedInUser.pipe(
        //     map(loggedInUser => Boolean(loggedInUser || loggedInUser.email))
        // );
    }
}