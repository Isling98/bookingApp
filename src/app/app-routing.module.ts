import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginScreenComponent} from './login/login-screen/login-screen.component';
import {LokaleBookingComponent} from './bookings/lokale-booking/lokale-booking.component';
import {MineBookingsComponent} from './bookings/mine-bookings/mine-bookings.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {Gruppe20Component} from './gruppe20/gruppe20.component';
import {BrugeroplysningerComponent} from './brugeroplysninger/brugeroplysninger.component';
import {LokaleoversigtComponent} from './bookings/lokaleoversigt/lokaleoversigt.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginScreenComponent},
  {path: 'ny-booking', component: LokaleBookingComponent},
  {path: 'mine-bookings', component: MineBookingsComponent},
  {path: 'lokaleoversigt', component: LokaleoversigtComponent},
  {path: 'brugeroplysninger', component: BrugeroplysningerComponent},
  {path: 'gruppe20', component: Gruppe20Component},
  {path: 'not-found', component: PageNotFoundComponent},
  /*Nedenstående path skal altid være den nederste path, ellers overwriter den de andre paths og vil altid redirecte!*/
  {path: 'log-ud', redirectTo: 'login'},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
 imports: [RouterModule.forRoot(appRoutes)],
 exports: [RouterModule]
})
export class AppRoutingModule {

}
