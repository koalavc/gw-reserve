import { Component, OnInit } from "@angular/core";
import { INavigationItem } from "./../../interfaces/INavigationItem";

@Component({
    selector: 'gw-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: [
        './navigation.component.scss'
    ]
})

export class NavigationComponent implements OnInit{
    // public navigationComp: string = 'Welcome to the navigation component';
    public menuItems: INavigationItem[];

    ngOnInit(): void {
        // this fires when the component is initialized
        this.menuItems = [{
            label: 'Donkey Kong',
            url: '/donkeykong'
        },
        {
            label: 'Halo',
            url: '/halo'
        },
        {
            label: 'Zelda',
            url: '/zelda'
        },
        {
            label: 'Sim City',
            url: '/simcity'
        }]
    }

}