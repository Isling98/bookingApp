import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// Service der kan deles mellem components, så samme værdi af isUserLoggedIn bruges hver gang!
export class LoginService {

  private HTTPString: string;


  get getHTTPString(): string {
    return this.HTTPString;
  }

  set setHTTPString(value: string) {
    this.HTTPString = value;
  }

  private isUserLoggedIn: boolean;


  get getisUserLoggedIn(): boolean {
    return this.isUserLoggedIn;
  }

  set setisUserLoggedIn(value: boolean) {
    this.isUserLoggedIn = value;
  }
}
