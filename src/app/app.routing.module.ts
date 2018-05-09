import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { AboutComponent } from "./components/about/about.component";
import { FourOhFourComponent } from "./components/404/fourohfour.component";


const routes: Route[] = [
  {
    path: "welcome",
    component: WelcomeComponent
  },

//   {
//     path: "room",
//     component: RoomComponent
//   },
  {
    path: "",
    component: WelcomeComponent
  },
  {
    path: "**",
    component: FourOhFourComponent
  }
];

@NgModule ({
    imports: [RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})

export class AppRoutingModule{ }

export const RoutedComponents = [FourOhFourComponent, WelcomeComponent];

