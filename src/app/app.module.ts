import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { LokaleBookingComponent } from './lokale-booking/lokale-booking.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginFailedComponent } from './login-failed/login-failed.component';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    LoginScreenComponent,
    LokaleBookingComponent,
    NavigationbarComponent,
    MybookingsComponent,
    PageNotFoundComponent,
    LoginFailedComponent,

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
