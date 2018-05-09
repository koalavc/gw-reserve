import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IRoom } from "./../../../interfaces/IRoom";
import { map, tap } from 'rxjs/operators';

@Component({
  selector: "gw-room",
  templateUrl: "./room.component.html",
  styleUrls: ["./room.component.scss"]
})
export class RoomComponent {

    
    // public roomComp: string = "Welcome to the room component";
    public id: string;
    constructor(private _route: ActivatedRoute) {}

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
    }

    private _someOtherWorkHere(){
      console.log(this.id);
    }
}
