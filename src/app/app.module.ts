import { NgModule } from '@angular/core'; //NgModule supplys metadata / gives angular information about 
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { NavigationComponent } from "./navigation/navigation.component";

@NgModule({
    // configuration module
    declarations: [
        AppComponent, //telling angular about the comopnent
        LoginComponent,
        WelcomeComponent,
        NavigationComponent
    ],
    imports: [
        BrowserModule
    ],

    // choosing the component that boots
    bootstrap: [
        AppComponent 
    ]
})
export class AppModule {

}