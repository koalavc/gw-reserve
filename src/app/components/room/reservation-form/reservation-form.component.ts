import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { NgForm } from "@angular/forms";

import { IReservation } from "../../../../interfaces/IReservation";
import { RoomService } from "../../../../service/room.service";


@Component({
  selector: "gw-room-form",
  templateUrl: "./reservation-form.component.html",
  styleUrls: ["./reservation-form.component.scss"]
})
export class ReservationFormComponent implements OnInit {
  public roomId: string;
  public reasons: string[];

  @ViewChild("roomForm") private _form: NgForm;

  public defaultStartTimeString: string;
  public defaultEndTimeString: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _roomService: RoomService,
    private _router: Router
  ) {}

  public ngOnInit() {
    this.reasons = [
      "Séance",
      "Scrum meeting",
      "Scrum beating",
      "Performance review",
      "Client meetup",
      "Interview"
    ];

    this._activatedRoute.parent.paramMap.subscribe(param => {
      this._switchRoom(param.get("id"));
    });

    this.defaultStartTimeString = this._getDefaultStartDate()
      .toTimeString()
      .split(" ")[0];
    this.defaultEndTimeString = this._getDefaultEndDate()
      .toTimeString()
      .split(" ")[0];
  }

  private _switchRoom(id: string) {
    this.roomId = id;
  }

  public onSubmit(reservation: IReservation) {
    // return this._roomService
    //   .writeRoomReservation(this.roomId, reservationValues)
    //   .then(() =>
    //     this._router.navigate(["../list"], { relativeTo: this._activatedRoute })
    //   );
    return this._roomService.writeRoomReservation(this.roomId, reservation).then(writtenObject => console.log("it's written"));
  }

  private _getDefaultStartDate() {
    const date = new Date();

    date.setHours(date.getHours() + 1);
    date.setMinutes(0);
    date.setSeconds(0);

    return date;
  }

  private _getDefaultEndDate() {
    const date = this._getDefaultStartDate();

    date.setHours(date.getHours() + 1);

    return date;
  }
}