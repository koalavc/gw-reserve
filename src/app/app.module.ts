import { NgModule } from '@angular/core'; //NgModule supplys metadata / gives angular information about 
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule, RoutedComponents } from "./app.routing.module";
import { RoomModule } from "./components/room/room.module";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { LoginComponent } from "./components/login/login.component";
import { AppComponent } from "./app.component";

import { RoomService } from "../service/room.service";
// import { NavigationComponent } from './components/navigation/navigation.component';
// import { WelcomeComponent } from './components/welcome/welcome.component';
// import { LoginComponent } from "./components/login/login.component";
// import { FourOhFourComponent } from "./components/404/fourohfour.component";


@NgModule({
  // configuration module
//   declartions only components
  declarations: [
    AppComponent, //telling angular about the comopnent
    RoutedComponents,
    NavigationComponent,
    LoginComponent
  ],
//   modules only imprts
  imports: [BrowserModule,RoomModule, AppRoutingModule ],
  providers: [RoomService],

  // choosing the component that boots
  bootstrap: [AppComponent]
})
export class AppModule {}