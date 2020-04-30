import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

 // Service der kan deles mellem components, så samme værdi af isUserLoggedIn bruges hver gang!
export class LoginService {

  get headerString(): string {
    return this._headerString;
  }

  set headerString(value: string) {
    this._headerString = value;
  }

  isUserLoggedIn: boolean;

  private _headerString: string = "s180077:123";

  private _httpOptions  = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'Basic ' + btoa(this.headerString)
    })
  };


  get httpOptions(): { headers: HttpHeaders } {
    return this._httpOptions;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

  setUserLoggedIn(isUserLoggedIn: boolean) {
    this.isUserLoggedIn = isUserLoggedIn;
  }



}
