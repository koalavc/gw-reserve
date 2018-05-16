import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { INavigationItem } from "./../../../interfaces/INavigationItem";
import { RoomService } from "../../../service/room.service";
import { IRoom } from "../../../interfaces/IRoom";

import { map } from 'rxjs/operators';

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

         this._roomService.rooms 
            .pipe( //send data down to compare
                map((roomsList: IRoom[])=> { //call map
                    console.log('rxjs map roomsList: ', roomsList)
                    const navItems:INavigationItem[] = roomsList.map(eachRoom => { //passing an array of IRooms
                        console.log('Each rooms: ', eachRoom);
                        return { 
                            label: eachRoom.title,
                            url: "room/" + eachRoom.id
                        };
                    })
                    console.log('navItems: ', navItems);
                    return navItems; //return navItems
                }) // end map
            ) // end pipe
            .subscribe(mappedResponse => {
                console.log('Res: ', mappedResponse);
                mappedResponse.forEach(roomItem => {
                    console.log('Room: ', roomItem);
                    this.menuItems.push(roomItem)}
                            )
                        }
                    );
            
        // map(room => {
        //     return {
        //         label: room.title,
        //         url: "room/" + room.id
        //     };
        // });

        // roomItems.forEach(roomItem => this.menuItems.push(roomItem));

    }
}