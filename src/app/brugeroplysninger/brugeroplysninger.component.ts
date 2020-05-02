import { Component, OnInit } from '@angular/core';
import {Bruger} from './bruger.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from '../shared-services/login.service';
import {BrugerService} from '../shared-services/bruger.service';

@Component({
  selector: 'app-bruger-oplysninger',
  templateUrl: './brugeroplysninger.component.html',
  styleUrls: ['./brugeroplysninger.component.css']
})
export class BrugeroplysningerComponent implements OnInit {

  // Dummy data - skal selvfølgelig hente det rigtige senere..
  public bruger: Bruger = this.brugerService.getBruger();

  public testData: JSON;
  public testBruger: string;

  // Test test skal være i service
  public id: number;
  public username: string;
  public firstName: string;
  public lastName: string;
  public bookingList: number[];


  // Den nye kan findes her: http://ec2-3-20-238-191.us-east-2.compute.amazonaws.com:8082/
  // hvor i kan logge ind med username s180077 pass 123

  constructor(private http: HttpClient,
              private loginService: LoginService,
              private brugerService: BrugerService) { }

  ngOnInit() {
    if (this.loginService.getUserLoggedIn()) {
    const username = 's180077';
    const password = '123';

    const authorizationData = 'Basic ' + btoa(username + ':' + password);

    const headerOptions = {
      headers: new HttpHeaders({
        Authorization: authorizationData
      })
    };

    this.http.get('http://ec2-3-21-232-61.us-east-2.compute.amazonaws.com:8080/users/18').subscribe
    (data => {this.testBruger = JSON.stringify(data); });
    console.log(this.testBruger);

    // Test med opdeling af data:
    this.http.get<JSON>('http://ec2-3-21-232-61.us-east-2.compute.amazonaws.com:8080/users/18').subscribe
    (data => {this.id = data['id'], this.username = data['username'],
      this.firstName = data['firstName'], this.lastName = data['lastName'], this.bookingList = data['bookingList']; });
    console.log(this.testBruger);

    // Test med et anden API
    this.http.get<JSON>('https://random-word-api.herokuapp.com/word?number=10').subscribe
    (data => {this.testData = data; });
  } else { this.bruger = null; }
  }
}
