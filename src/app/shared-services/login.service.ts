import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

 // Service der kan deles mellem components, så samme værdi af isUserLoggedIn bruges hver gang!
export class LoginService {
  isUserLoggedIn: boolean;

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

  setUserLoggedIn(isUserLoggedIn: boolean) {
    this.isUserLoggedIn = isUserLoggedIn;
  }
}
