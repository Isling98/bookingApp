import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookingApp';
}
//  Noget der tjekker om brugeren er logget ind og ikke skal vise topbaren, hvis de ikke er.. *ngIf="userLoggedIn"
