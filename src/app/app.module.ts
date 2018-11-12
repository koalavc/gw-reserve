import { NgModule } from '@angular/core'; //NgModule supplys metadata / gives angular information about 
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule, AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { AppRoutingModule, RoutedComponents } from "./app.routing.module";
import { RoomModule } from "./components/room/room.module";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { LoginComponent } from "./components/login/login.component";
import { AppComponent } from "./app.component";


import { environment } from "./../environments/environment";

import { RoomService } from "../service/room.service";
import { LoginService } from '../service/login.service';
import { LoginGuardService } from '../service/login.guard.service';


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
  imports: [
    BrowserModule,
    RoomModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],

  providers: [
    AngularFireAuth,
    RoomService,
    LoginService,
    LoginGuardService
  ],

  // choosing the component that boots
  bootstrap: [AppComponent]
})
export class AppModule {}