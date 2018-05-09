import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { INavigationItem } from "./../../../interfaces/INavigationItem";
import { RoomService } from "../../../service/room.service";

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

// when u inject something u need constructor
    constructor(private _roomService: RoomService, private _router: Router ){}

    ngOnInit(): void {
        // this fires when the component is initialized
        // console.log(this._roomService);
        

        this.menuItems = [{
            label: 'Welcome',
            url: 'welcome'
        },
        {
            label: "About",
            url: 'about'
        }];

        console.log(this._roomService.rooms);

        const roomItems: INavigationItem[] = this._roomService.rooms.map(room => {
            return {
                label: room.title,
                url: "room/" + room.id
            };
        });

        roomItems.forEach(roomItem => this.menuItems.push(roomItem));

    }

}