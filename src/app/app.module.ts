import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LoginScreenComponent } from './login/login-screen/login-screen.component';
import { LokaleBookingComponent } from './bookings/lokale-booking/lokale-booking.component';
import { MybookingsComponent } from './bookings/mine-bookings/mybookings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginFailedComponent } from './login/login-failed/login-failed.component';
import {AppRoutingModule} from './app-routing.module';
import { LokaleOversigtComponent } from './bookings/lokale-oversigt/lokale-oversigt.component';
import { BrugerOplysningerComponent } from './bruger-oplysninger/bruger-oplysninger.component';
import { Gruppe25Component } from './gruppe25/gruppe25.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    LoginScreenComponent,
    LokaleBookingComponent,
    MybookingsComponent,
    PageNotFoundComponent,
    LoginFailedComponent,
    LokaleOversigtComponent,
    BrugerOplysningerComponent,
    Gruppe25Component,

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
