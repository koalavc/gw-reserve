import { Component } from '@angular/core';

@Component({
    selector: 'gw-application',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.scss'
    ]
})

export class AppComponent {
    public welcome: string = 'Welcome to the app.';
}