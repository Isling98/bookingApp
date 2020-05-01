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
    this.http.get<JSON>('http://ec2-3-21-232-61.us-east-2.compute.amazonaws.com:8080/bookings/user/19')
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
      });

  }

  hentBooking() {
    // tslint:disable-next-line:max-line-length

  }

  confirmDeleteBooking() {
    this.deletedialogService.openDialog()
      .afterClosed().subscribe(response => {
        console.log(response);
        console.log(this.hentetBookings)
      /**
       * Her skal laves et kald med if(responese === true) så skal deleteBookingDatabase (måske andet navn) kaldes, hvor der slettes
       * booking fra databasen vha. http delete. else console.log(response)
       */
    });
  }

  deleteBooking() {

    /**
     * Har svært ved at tilgå de enkelte elementer at listen af bookings, som bliver lavet inde i mine-bookings-html.
     * Hvis det overhovedet kan lade sig gøre, så skal jeg have fat i en måde, hvor man kan få fat i hvert element som bliver lavet
     * ud fra: ngFor-loopet før jeg kan lave en delete metode vha. knapper.
     *
     * PRØV:
     * Benyt samme metode som mads har brugt til at tilgå et element
     */

  }

  /**
   * Her kunne laves en delete-metode, som fjerne ud fra bookingens id.
   * Metoden skal kun kaldes gennem knappen delete fra html, og derfra evt. måske en pop-op for at tjekke at brugeren er sikker.
   * Tjek udemy kurses for delete-metode (eller nettet)
   *
   *
   * ALTERNATIV:
   * Lav kun 1 enkelt knap til delete, hvor brugeren selv skriver det id som de ønsker at slette, så ville popup stadig kunne
   * benyttes, men blot hvor der indtastes et bookingId, så det er lettere at lave http.delete metoden.
   */

}
