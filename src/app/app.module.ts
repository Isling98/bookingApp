import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { LokaleBookingComponent } from './lokale-booking/lokale-booking.component';
import {RouterModule, Routes} from '@angular/router';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: '', component: LoginScreenComponent},
  {path: 'booking', component: LokaleBookingComponent},
  {path: 'minebookings', component: MybookingsComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  /*Nedenstående path skal altid være den nederste path, ellers overwriter den de andre paths og vil altid redirecte!*/
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    LoginScreenComponent,
    LokaleBookingComponent,
    NavigationbarComponent,
    MybookingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
