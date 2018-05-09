import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

import { RoomComponent } from "../room/room.component";
import { ReservationFormComponent } from "../room/reservation-form/reservation-form.component";
import { ReservationListComponent } from "../room/reservation-list/reservation-list.component";


const routes: Route[] = [
  {
    path: "room/:id",
    component: RoomComponent,
    children: [
        {
            path: "form",
            component:ReservationFormComponent
        },
        {
            path: 'list',
            component: ReservationListComponent
        },
        {
            path: "**",
            redirectTo: 'list',
            pathMatch: 'full'
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule {}

export const RoutedComponents = [RoomComponent, ReservationFormComponent, ReservationListComponent ];
