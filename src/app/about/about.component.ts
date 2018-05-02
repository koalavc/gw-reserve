import { Component } from "@angular/core";

@Component({
  selector: "gw-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent {
  public aboutComp: string = "Welcome to the welcome component";
}
