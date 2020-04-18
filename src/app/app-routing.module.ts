import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginScreenComponent} from './login-screen/login-screen.component';
import {LokaleBookingComponent} from './lokale-booking/lokale-booking.component';
import {LoginFailedComponent} from './login-failed/login-failed.component';
import {MybookingsComponent} from './mybookings/mybookings.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  {path: '', component: LoginScreenComponent},
  {path: 'booking', component: LokaleBookingComponent},
  {path: 'forkert-adgangskode', component: LoginFailedComponent},
  {path: 'minebookings', component: MybookingsComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  /*Nedenstående path skal altid være den nederste path, ellers overwriter den de andre paths og vil altid redirecte!*/
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
 imports: [RouterModule.forRoot(appRoutes)],
 exports: [RouterModule]
})
export class AppRoutingModule {

}
