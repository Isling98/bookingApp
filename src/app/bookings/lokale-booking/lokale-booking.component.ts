import {Component, Input, NgModule, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { MaterialModule } from './material.module';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-lokale-booking',
  templateUrl: './lokale-booking.component.html',
  styleUrls: ['./lokale-booking.component.css']
})
export class LokaleBookingComponent implements OnInit {
  recipeForm: FormGroup;
  url = 'http://ec2-3-20-238-191.us-east-2.compute.amazonaws.com:8082';
  hentetBookings = [];
  dato: Date = new Date();

 @Input() Booking: {personer: number, dato: number, start: number, slut: number};



  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.hentbooking();
  }
  showhide() {
    const click = document.getElementById('drop-content');
    if (click.style.display === 'none') {
      click.style.display = 'block';
    } else {
      click.style.display = 'none';
    }
  }
  highlightTidspunkt() {
    const click = document.getElementById('');
  }
  // Booking
  hentbooking() {
  this.http.get<JSON>(this.url + '/bookings/' + this.dato.getDate() + '/' + this.dato.getMonth())
    .pipe(map(responseData => {
      const postArray = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          postArray.push({...responseData[key]});
        }
      }
      return postArray;
    }))
    .subscribe(data => {
      /*
      this.booking.id = data['id'],
      this.booking.roomId = data['roomId'],
      this.booking.timeblock = data['timeblock'],
      this.booking.username = data['username']; });
       */
      console.log(data);
      this.hentetBookings = data;
      /* tslint:disable:no-string-literal */
    });
}
}
