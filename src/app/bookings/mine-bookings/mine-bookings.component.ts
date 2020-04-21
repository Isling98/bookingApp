import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {BookingModel} from '../booking.model';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mine-bookings.component.html',
  styleUrls: ['./mine-bookings.component.css']
})
export class MineBookingsComponent implements OnInit {
  url = 'https://ec2-3-20-238-191.us-east-2.compute.amazonaws.com:8082/';

  bookingData: Observable<BookingModel[]>;
  bookingPost: Observable<BookingModel[]>;
  public booking: BookingModel = new BookingModel();

  constructor(private http: HttpClient) {}

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
    /**
     * Man kan også benytte httpParams til at authenticate headers - dvs hvis vi kan få gjort sådan at login username
     * sendes med i header, så kan params lettere finde de bookings der passer til login username el. lign.
     * .
     * .
     * Lige nu virker params ikke ordentlig, men tænker det måske er et problem med hvordan det er sat op i REST-api'et
     */

    // get booking 34
    this.http.get<JSON>('http://ec2-3-20-238-191.us-east-2.compute.amazonaws.com:8082/bookings/34').subscribe(data => {this.booking.id = data['id'],
      this.booking.roomId = data['roomId'], this.booking.timeblock = data['timeblock'], this.booking.username = data['username']; });

    console.log(this.booking);
  }

  hentBooking() {
    // tslint:disable-next-line:max-line-length


  }
  /*
  createBooking() {
    /**
     * I denne metode kan de hardcoded værdier ændres til nogle værdier, som man får fra html filen vha. data bindings
     * så det kommer til at hænge bedre sammen.
     */
  /*
    const data: Bookings = {
      id: 5,
      timeblock: 3,
      roomId: 2,
      userId: 4,
      username: 's180077',
      month: 11,
      year: 2020,
      day: 11
    }
    this.bookingPost = this.http.post<Bookings[]>(this.url + '/bookings', data);

  }
**/

  /**
   * Her kunne laves en delete-metode, som fjerne ud fra bookingens id.
   * Metoden skal kun kaldes gennem knappen delete fra html, og derfra evt. måske en pop-op for at tjekke at brugeren er sikker.
   * Tjek udemy kurses for delete-metode (eller nettet)
   */

}
