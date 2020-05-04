import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './shared-services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookingApp';
  isUserLoggedIn = this.loginService.getUserLoggedIn();

  constructor(public router: Router,
              public loginService: LoginService) {
  }
}
//  Noget der tjekker om brugeren er logget ind og ikke skal vise topbaren, hvis de ikke er.. *ngIf="userLoggedIn"
