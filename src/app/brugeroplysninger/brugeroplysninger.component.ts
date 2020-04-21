import { Component, OnInit } from '@angular/core';
import {Bruger} from './bruger.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-bruger-oplysninger',
  templateUrl: './brugeroplysninger.component.html',
  styleUrls: ['./brugeroplysninger.component.css']
})
export class BrugeroplysningerComponent implements OnInit {

  // Dummy data - skal selvfølgelig hente det rigtige senere..
  public bruger: Bruger = new Bruger('s123456', 's123456@student.dtu.dk',
    '21:22', 'ukendt', 'demobruger', 'Dennis',
  'Demostudent', '<IKKE OFFENTLIG>', 'Tennis og programmering',
    'http://www.diplom.dtu.dk/');

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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const username = 's180077';
    const password = '123';

    const authorizationData = 'Basic ' + btoa(username + ':' + password);

    const headerOptions = {
      headers: new HttpHeaders({
        Authorization: authorizationData
      })
    };

    this.http.get('http://ec2-3-20-238-191.us-east-2.compute.amazonaws.com:8082/users/18').subscribe
    (data => {this.testBruger = JSON.stringify(data); });
    console.log(this.testBruger);

    // Test med opdeling af data:
    this.http.get<JSON>('http://ec2-3-20-238-191.us-east-2.compute.amazonaws.com:8082/users/19').subscribe
    (data => {this.id = data['id'], this.username = data['username'],
      this.firstName = data['firstName'], this.lastName = data['lastName'], this.bookingList = data['bookingList']; });
    console.log(this.testBruger);

    // Test med et anden API
    this.http.get<JSON>('https://random-word-api.herokuapp.com/word?number=10').subscribe
    (data => {this.testData = data; });
  }

}
