import { NgModule } from '@angular/core'; //NgModule supplys metadata / gives angular information about 
import { RouterModule, Route } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { AboutComponent } from './about/about.component';
import { SimCityComponent } from "./simcity/simcity.component";
import { ZeldaComponent } from "./zelda/zelda.component";
import { HaloComponent } from "./halo/halo.component";
import { DonkeyKongComponent } from "./donkeykong/donkeykong.component";

const routes: Route[] = [
    {
        component: DonkeyKongComponent,
        path: "donkeykong"
    },
    {
        component: SimCityComponent,
        path: "simcity"
    },
    {
        component: ZeldaComponent,
        path: "zelda"
    },
    {
        component: HaloComponent,
        path: "halo"
    },
    {
        component: AppComponent,
        path: "*"
    }
    // {
    //     path: "",
    //     redirectTo: AppComponent,
    //     pathMatch: "full" //
    // }
    // {
    //     component: WelcomeComponent,
    //     path: ""
    // },
    // {
    //     path: "*",
    //     component: NotFoundComponent
    // }
];

@NgModule({
    // configuration module
    declarations: [
        AppComponent, //telling angular about the comopnent
        LoginComponent,
        WelcomeComponent,
        NavigationComponent,
        AboutComponent,
        SimCityComponent,
        ZeldaComponent,
        HaloComponent,
        DonkeyKongComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],

    // choosing the component that boots
    bootstrap: [
        AppComponent 
    ]
})
export class AppModule {

}