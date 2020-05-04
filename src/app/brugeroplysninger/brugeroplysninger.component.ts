import {Component, NgModule, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from '../shared-services/login.service';
import {BrugerService} from '../shared-services/bruger.service';
import {Bruger} from './bruger.model';
import {ngModuleJitUrl} from '@angular/compiler';
import {root} from 'rxjs/internal-compatibility';

@Component
({
  selector: 'app-bruger-oplysninger',
  templateUrl: './brugeroplysninger.component.html',
  styleUrls: ['./brugeroplysninger.component.css']
})


export class BrugeroplysningerComponent implements OnInit {

  public bruger: Bruger = this.brugerService.getBruger();
  public isUserLoggedIn = this.loginService.getisUserLoggedIn;

  // Den nye kan findes her: http://ec2-3-21-232-61.us-east-2.compute.amazonaws.com:8081/
  // hvor i kan logge ind med username s180077 pass 061198

  constructor(private http: HttpClient,
              private loginService: LoginService,
              private brugerService: BrugerService) { }

  ngOnInit() {


    if (this.loginService.getisUserLoggedIn) {
      // Test med opdeling af data:
    this.http.get<JSON>('http://ec2-3-21-232-61.us-east-2.compute.amazonaws.com:8081/users/username/'
      + this.brugerService.getBruger().username,
      { headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Basic ' + btoa(this.loginService.getHTTPString)
      })}).subscribe
      (data => {this.bruger.id = data['id'], this.bruger.username = data['username'],
        this.bruger.firstName = data['firstName'], this.bruger.lastName = data['lastName'],
        this.bruger.bookingList = data['bookingList']; });

    // Venter på at data er hentet helt ned og skriver så til bruger.service.
    setTimeout(() => {
          console.log(this.bruger);
          this.brugerService.setBruger(this.bruger);
          console.log(this.brugerService.getBruger());
        },
        5000);
  } else { this.bruger = null; }
  }
}
