import { Component, OnInit } from '@angular/core';
import {Bruger} from './bruger.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bruger-oplysninger',
  templateUrl: './brugeroplysninger.component.html',
  styleUrls: ['./brugeroplysninger.component.css']
})
export class BrugeroplysningerComponent implements OnInit {

  // Dummy data - skal selvfølgelig hente det rigtige senere..
  public bruger: Bruger = new Bruger('s123456', 's123456@student.dtu.dk',
    '1585136654001', 'ukendt', 'demobruger', 'Dennis',
  'Demostudent', '<IKKE OFFENTLIG>', 'Tennis og programmering',
    'http://www.diplom.dtu.dk/');

  public testData: JSON;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const headers = {Username: 's180077', Password: '123'}
    this.http.get<any>('http://ec2-3-20-238-191.us-east-2.compute.amazonaws.com:8082/users/19',
      {headers}).subscribe
    (data => {this.testData = data.total;
    });
    console.log(this.testData);
  }

}
