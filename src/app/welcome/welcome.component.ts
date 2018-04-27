import { Component } from "@angular/core";

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