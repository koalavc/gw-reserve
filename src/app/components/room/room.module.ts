import { NgModule } from "@angular/core"; //NgModule supplys metadata / gives angular information about

import { RoomRoutingModule, RoutedComponents } from "./room.routing.module";

import { RoomService } from "./../../../service/room.service";

@NgModule({
    imports: [RoomRoutingModule],
    providers: [RoomService],
    declarations: [RoutedComponents]
})

export class RoomModule{}