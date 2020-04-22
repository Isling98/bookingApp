import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from '../shared-services/login.service';
import {BrugerService} from '../shared-services/bruger.service';
import {Bruger} from './bruger.model';

@Component({
  selector: 'app-bruger-oplysninger',
  templateUrl: './brugeroplysninger.component.html',
  styleUrls: ['./brugeroplysninger.component.css']
})
export class BrugeroplysningerComponent implements OnInit {

  // Dummy data - skal selvfølgelig hente det rigtige senere..
  public bruger: Bruger = this.brugerService.getBruger();


  // Den nye kan findes her: http://ec2-3-20-238-191.us-east-2.compute.amazonaws.com:8082/
  // hvor i kan logge ind med username s180077 pass 123

  constructor(private http: HttpClient,
              private loginService: LoginService,
              private brugerService: BrugerService) { }

  ngOnInit() {
    if (this.loginService.getUserLoggedIn()) {
    /*const username = 's180077';
    const password = '123';

    const authorizationData = 'Basic ' + btoa(username + ':' + password);

    const headerOptions = {
      headers: new HttpHeaders({
        Authorization: authorizationData
      })
    };*/

      // Test med opdeling af data:
    this.http.get<JSON>('http://ec2-3-20-238-191.us-east-2.compute.amazonaws.com:8082/users/19').subscribe
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
