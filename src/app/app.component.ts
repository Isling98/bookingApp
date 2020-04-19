import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookingApp';

  constructor(public router: Router) {
  }
}
//  Noget der tjekker om brugeren er logget ind og ikke skal vise topbaren, hvis de ikke er.. *ngIf="userLoggedIn"
