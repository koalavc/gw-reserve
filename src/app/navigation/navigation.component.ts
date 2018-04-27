import { Component, OnInit, OnDestroy } from "@angular/core";
import { INavigationItem } from "./../../interfaces/INavigationItem";

@Component({
    selector: 'gw-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: [
        './navigation.component.scss'
    ]
})

export class NavigationComponent implements OnInit, OnDestroy{
    // public navigationComp: string = 'Welcome to the navigation component';
    public menuItems: INavigationItem[];

    ngOnInit(): void {
        // this fires when the component is initialized
        this.menuItems = [{
            label: 'Home',
            url: 'https://www.google.com'
        },
        {
            label: 'About',
            url: '/temp'
        },
        {
            label: 'Portfolio',
            url: '/temp2'
        }
    ]
    }

    ngOnDestroy(): void {
        throw new Error("Method not implemented");
    }
}