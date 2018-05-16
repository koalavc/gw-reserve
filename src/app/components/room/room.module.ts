import { NgModule } from "@angular/core"; //NgModule supplys metadata / gives angular information about
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoomRoutingModule, RoutedComponents } from "./room.routing.module";

import { RoomService } from "./../../../service/room.service";

@NgModule({
  imports: [FormsModule,RoomRoutingModule, CommonModule],
  providers: [RoomService],
  declarations: [RoutedComponents]
})
export class RoomModule {}