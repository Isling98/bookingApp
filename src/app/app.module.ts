import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { LokaleBookingComponent } from './lokale-booking/lokale-booking.component';
import { RouterModule, Routes } from '@angular/router';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

const appRoutes: Routes = [
  {path: '', component: LoginScreenComponent},
  {path: 'booking', component: LokaleBookingComponent},
  {path: 'my-bookings', component: MyBookingsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    LoginScreenComponent,
    LokaleBookingComponent,
    MyBookingsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
