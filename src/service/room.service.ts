import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
// importing an observable creation method

// import operators to combine or mutate data
// import { map, tap, mergeMap, take, retry} from 'rxjs/operators';

import { IRoom } from "../interfaces/IRoom";
import { IReservation } from "../interfaces/IReservation";

import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class RoomService {
  public rooms: Observable<IRoom[]>;

  constructor(private _database: AngularFireDatabase) {

    this.rooms = this._database.list<IRoom>('rooms').valueChanges();

    const reservations = [];

    // for (const key in this.rooms.reservations) {
    //   const reservation = room.reservations[key];
    //   reservation.id = key;
    //   reservations.push(reservation);
    // }

    // this.rooms = of([
    //   {
    //     id: "1",
    //     title: "starfox",
    //     picture: "starfox.jpg"
    //   },
    //   {
    //     id: "2",
    //     title: "halo",
    //     picture: "halo.jpg"
    //   },
    //   {
    //     id: "3",
    //     title: "sonic",
    //     picture: "sonic.jpg"
    //   },
    //   {
    //     id: "4",
    //     title: "zelda",
    //     picture: "zelda.jpg"
    //   }
    // ]);
  }

  getRoomById(id): Observable<IRoom> {
    return this.rooms
      .map((rooms: IRoom[]) => rooms.find(room => room.id === id))
      .map((room: IRoom) => {
        // OK, so _database.list("rooms") massages our room response from Firebase into something
        // we can iterate but reservations remain in a key structure as depicted.

        // example:
        // {
        //     "-KxHthSjHB6uVWZOCBXR": {
        //         "email":"josh@hotmale.com",
        //         "emailConfirmation":"josh@hotmale.com",
        //         "endTime":"14:00",
        //         "isAgreed":true,
        //         "reason":"Scrum meeting",
        //         "startTime":"12:00"
        //     },
        //     "-KxHtmNfK_DSZQ8QqFWt": {
        //         "email":"josh@hotmale.com",
        //         "emailConfirmation":"josh@hotmale.com",
        //         "endTime":"16:00",
        //         "isAgreed":true,
        //         "reason":"Scrum beating",
        //         "startTime":"15:00"
        //     }
        // }

        // Here in our code, let's do the massaging ourselves so we may iterate reservations with
        // an *ngFor..., please refer to TypeScript's documentation for "for...of", "for...in"

        const reservations = [];

        for (const key in room.reservations) {
          const reservation = room.reservations[key];
          reservation.id = key;
          reservations.push(reservation);
        }

        // let's replace what Firebase gives us with this nice array we just built
        room.reservations = reservations;

        return room;
      });
  }

  writeRoomReservation(roomId: string, reservation: IReservation) {
    console.log('reserve!');
    return this._database.list(`rooms/${roomId}/reservations`).push(reservation);
  }

  deleteRoomReservation(roomId, reservationId) {
    console.log('delete!');
    return this._database.list(`rooms/${roomId}/reservations`).remove(reservationId);

  }
}