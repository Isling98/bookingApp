import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Bookings } from './bookings';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {
  url = 'http://ec2-3-20-238-191.us-east-2.compute.amazonaws.com:8081/';

  bookingData: Observable<Bookings[]>;
  bookingPost: Observable<Bookings[]>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
  }


  private fetchData() {
    /**
     * Man kan også benytte httpParams til at authenticate headers - dvs hvis vi kan få gjort sådan at login username
     * sendes med i header, så kan params lettere finde de bookings der passer til login username el. lign.
     * .
     * .
     * Lige nu virker params ikke ordentlig, men tænker det måske er et problem med hvordan det er sat op i REST-api'et
     */

    const params = new HttpParams().set('timeblock', '2');

    this.bookingData = this.http.get<Bookings[]>(this.url + '/bookings', {params});
  }

  createBooking() {
    /**
     * I denne metode kan de hardcoded værdier ændres til nogle værdier, som man får fra html filen vha. data bindings
     * så det kommer til at hænge bedre sammen.
     */
    const data: Bookings = {
      id: 5,
      timeblock: 3,
      roomId: 2,
      userId: 4,
      month: 11,
      year: 2020,
      day: 11
    }
    this.bookingPost = this.http.post<Bookings[]>(this.url + '/bookings', data);

  }

  /**
   * Her kunne laves en delete-metode, som fjerne ud fra bookingens id.
   * Metoden skal kun kaldes gennem knappen delete fra html, og derfra evt. måske en pop-op for at tjekke at brugeren er sikker.
   * Tjek udemy kurses for delete-metode (eller nettet)
   */

}
