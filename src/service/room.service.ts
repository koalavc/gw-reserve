import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
// importing an observable creation method
import { of } from "rxjs/observable/of";

// import operators to combine or mutate data
import { map, tap, mergeMap, take, retry} from 'rxjs/operators';

import { IRoom } from "../interfaces/IRoom";

@Injectable()
export class RoomService {
  public rooms: Observable<IRoom[]>;

  constructor() {
    this.rooms = of([
      {
        id: "1",
        title: "starfox",
        picture: "starfox.jpg"
      },
      {
        id: "2",
        title: "halo",
        picture: "halo.jpg"
      },
      {
        id: "3",
        title: "sonic",
        picture: "sonic.jpg"
      },
      {
        id: "4",
        title: "zelda",
        picture: "zelda.jpg"
      }
    ]);
  }

  writeRoomReservation(){
    console.log('write!');
  }

  deleteRoomReservation(){
    console.log('delete!');
  }


}
