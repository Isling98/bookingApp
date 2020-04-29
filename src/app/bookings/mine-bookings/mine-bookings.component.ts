import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {BookingModel} from '../booking.model';
import {map} from 'rxjs/operators';
import {httpheaderService} from '../../shared-services/httpheader.service';
import {DeletedialogService} from '../../shared-services/deletedialog.service';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mine-bookings.component.html',
  styleUrls: ['./mine-bookings.component.css']
})
export class MineBookingsComponent implements OnInit {

  public booking: BookingModel = new BookingModel();

  hentetBookings = [];

  constructor(private http: HttpClient, private httpHeader: httpheaderService, private deletedialogService: DeletedialogService) {}

  ngOnInit(): void {
    this.fetchData();

    const username = 's180077';
    const password = '123';

    const authorizationData = 'Basic ' + btoa(username + ':' + password);

    const headerOptions = {
      headers: new HttpHeaders({
        Authorization: authorizationData
      })
    };
  }

  public fetchData() {
    /* tslint:disable:no-string-literal */
    // get booking for user 18
    this.http.get<JSON>('http://ec2-3-20-238-191.us-east-2.compute.amazonaws.com:8082/bookings/user/25')
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

  hentBooking() {
    // tslint:disable-next-line:max-line-length

  }

  deleteBooking() {
    this.deletedialogService.openDialog()
      .afterClosed().subscribe(response => {
        console.log(response);
      /**
       * Her skal laves et kald med if(responese === true) så skal deleteBookingDatabase (måske andet navn) kaldes, hvor der slettes
       * booking fra databasen vha. http delete.
       */
    });
  }

  /**
   * Her kunne laves en delete-metode, som fjerne ud fra bookingens id.
   * Metoden skal kun kaldes gennem knappen delete fra html, og derfra evt. måske en pop-op for at tjekke at brugeren er sikker.
   * Tjek udemy kurses for delete-metode (eller nettet)
   */

}
