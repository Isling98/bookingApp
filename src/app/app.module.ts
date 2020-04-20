import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginScreenComponent } from './login/login-screen/login-screen.component';
import { LokaleBookingComponent } from './bookings/lokale-booking/lokale-booking.component';
import { MineBookingsComponent } from './bookings/mine-bookings/mine-bookings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginFailedComponent } from './login/login-failed/login-failed.component';
import {AppRoutingModule} from './app-routing.module';
import { LokaleoversigtComponent } from './bookings/lokaleoversigt/lokaleoversigt.component';
import { BrugeroplysningerComponent } from './brugeroplysninger/brugeroplysninger.component';
import { Gruppe20Component } from './gruppe20/gruppe20.component';
import {TopbarUdenknapperComponent} from './topbar-udenknapper/topbar-udenknapper.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginScreenComponent,
    LokaleBookingComponent,
    MineBookingsComponent,
    PageNotFoundComponent,
    LoginFailedComponent,
    LokaleoversigtComponent,
    BrugeroplysningerComponent,
    Gruppe20Component,
    TopbarUdenknapperComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
