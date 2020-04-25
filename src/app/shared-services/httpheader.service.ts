import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class httpheaderService {


  httpheaderset(username: string, pass: string ){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Basic ' + btoa(username + ':' + pass)
      })
    };

  }

  constructor() {
  }



}
