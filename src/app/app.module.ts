import { NgModule } from '@angular/core'; //NgModule supplys metadata / gives angular information about 
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

@NgModule({
    // configuration module
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}