import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './bookings/lokale-booking/material.module';
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
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {TopbarUdenknapperComponent} from './navigation/topbar-udenknapper/topbar-udenknapper.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


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
    TopbarUdenknapperComponent,
    ConfirmDeleteComponent,
    TopbarUdenknapperComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
