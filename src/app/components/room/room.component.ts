import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IRoom } from "./../../../interfaces/IRoom";
import { map, tap } from 'rxjs/operators';
import { RoomService } from "../../../service/room.service";

@Component({
  selector: "gw-room",
  templateUrl: "./room.component.html",
  styleUrls: ["./room.component.scss"]
})
export class RoomComponent {
    public room: IRoom;
    public isComplete: boolean;
  
    // public roomComp: string = "Welcome to the room component";
    public id: string;
    constructor(private _route: ActivatedRoute, private _roomService: RoomService) {}

    public ngOnInit(){

      console.log('room component init');

      this._route.paramMap
        .pipe( //map transforms data when it goes through the pipe
          map(paramMapResponse => {
            return paramMapResponse.get('id') + " was done mapped";
          })
        )
        .subscribe(mappedResponse => { //when we subscribe to someting, we are receiving data. 
          this.id = mappedResponse;
          this._someOtherWorkHere();
      })

      this._route.paramMap.subscribe(route => {
        this._roomService.getRoomById(route.get('id')).subscribe(room => {
          this.room = room;
          console.log(room);
        });

        this.isComplete = true;
      });
    }

    private _someOtherWorkHere(){
      console.log(this.id);
    }
}
