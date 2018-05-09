import { Component } from "@angular/core";

@Component({
  selector: "gw-reservation-list",
  templateUrl: "./reservation-list.component.html",
  styleUrls: ["./reservation-list.component.scss"]
})
export class ReservationListComponent {
  public loginComp: string = "Welcome to the reservation-list component";
}