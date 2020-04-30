import { Injectable } from '@angular/core';
import {Bruger} from '../brugeroplysninger/bruger.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

 // Service der kan deles mellem components, så samme værdi af isUserLoggedIn bruges hver gang!
export class LoginService {
  loginurl = 'http://ec2-3-21-232-61.us-east-2.compute.amazonaws.com:8080/api/users/login';
  httpUsername: '';
  httpPassword: '';

  constructor(private http: HttpClient) {
  }


  isUserLoggedIn: boolean;

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

  setUserLoggedIn(isUserLoggedIn: boolean) {
    this.isUserLoggedIn = isUserLoggedIn;
  }
  addBruger (loggedIn: boolean): Observable<boolean> {
    return this.http.post<boolean>(this.loginurl, this.httpUsername, )
  }
}
