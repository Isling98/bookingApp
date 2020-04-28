import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Bruger} from '../brugeroplysninger/bruger.model';
import {BrugerService} from './bruger.service';

@Injectable({
  providedIn: 'root'
})


export class httpheaderService {
  public bruger: Bruger = this.brugerService.getBruger();

/*
  httpheaderset(username: string, pass: string ){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Basic ' + btoa(username + ':' + pass)
      })
    };

    this.http.get<JSON>('http://ec2-3-20-238-191.us-east-2.compute.amazonaws.com:8082/users/19',httpOptions).subscribe
    (data => {this.bruger.id = data['id'], this.bruger.username = data['username'],
      this.bruger.firstName = data['firstName'], this.bruger.lastName = data['lastName'],
      this.bruger.bookingList = data['bookingList']; });
  }*/

  constructor(private http: HttpClient, private brugerService: BrugerService) {
  }



}
