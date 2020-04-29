import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {BookingModel} from '../booking.model';


@Component({
  selector: 'app-lokale-booking',
  templateUrl: './lokale-booking.component.html',
  styleUrls: ['./lokale-booking.component.css']
})
export class LokaleBookingComponent implements OnInit {
  url = 'http://ec2-3-20-238-191.us-east-2.compute.amazonaws.com:8082';
  hentetBookings = [];
  dato: Date = new Date();
  datearray = [];
  date;
  timeblockboolean = 2;
  timeblockarray = [];
  showstueetage: boolean = false;
  shows1sal: boolean = false;

  showTimeblocks: boolean = false;



  public booking: BookingModel = new BookingModel();



  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  // Booking
  hentbooking() {
    this.showTimeblocks = false;

  this.http.get<JSON>(this.url + '/bookings/' + this.datearray[1] + '/' + this.datearray[0])
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

    this.timeblockarray.length = data.length;
      for (let i = 0; i < this.timeblockarray.length ; i++) {
        this.timeblockarray[i] = new BookingModel();
        this.timeblockarray[i]['timeblock'] = data[i]['timeblock'];
        this.timeblockarray[i]['username'] = data[i]['username'];
        this.timeblockarray[i]['id'] = data[i]['id'];
      }


      this.booking.id = data[0]['id'];
      this.booking.roomId = data[0]['roomId'];
      this.booking.timeblock = data[0]['timeblock'];
      this.booking.username = data[0]['username'];


      this.hentetBookings = data;
      if (this.showTimeblocks===false){
        this.showTimeblocks = true;
      }
      console.log(data);
      console.log(this.timeblockarray);

    });
}
updatedato() {
    this.date = (document.getElementById('datepicker') as HTMLInputElement).value;
    this.datearray = this.date.split('/');
    console.log(this.datearray[0]);
}


refresh() {
    this.updatedato();
    this.hentbooking();
}
showstueetagemethod() {
    this.showstueetage = !this.showstueetage;
}
show1salmehod(){
    this.shows1sal = !this.shows1sal;
}
}
