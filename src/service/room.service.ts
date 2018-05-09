import { Injectable } from "@angular/core";
import { IRoom } from "../interfaces/IRoom";

@Injectable()
export class RoomService {
  public rooms: IRoom[];

  constructor() {
    this.rooms = [
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
    ];
  }
}
