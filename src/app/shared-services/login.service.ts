import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

 // Service der kan deles mellem components, så samme værdi af isUserLoggedIn bruges hver gang!
export class LoginService {

  private _httpString: string;


  get httpString(): string {
    return this._httpString;
  }

  set httpString(value: string) {
    this._httpString = value;
  }

  private _isUserLoggedIn: boolean;


  get getisUserLoggedIn(): boolean {
    return this._isUserLoggedIn;
  }

  set setisUserLoggedIn(value: boolean) {
    this._isUserLoggedIn = value;
  }
}
