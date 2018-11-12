import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

import { RoomComponent } from "../room/room.component";
import { ReservationFormComponent } from "../room/reservation-form/reservation-form.component";
import { ReservationListComponent } from "../room/reservation-list/reservation-list.component";
import { LoginGuardService } from "../../../service/login.guard.service";


const routes: Route[] = [
  {
    path: "room/:id",
    component: RoomComponent,
    canActivate: [LoginGuardService],
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
            redirectTo: 'form',
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
