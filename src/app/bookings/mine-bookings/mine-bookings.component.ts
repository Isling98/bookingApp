import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {BookingModel} from '../booking.model';
import {map} from 'rxjs/operators';
import {httpheaderService} from '../../shared-services/httpheader.service';
import {DeletedialogService} from '../../shared-services/deletedialog.service';
import {MatTableDataSource} from '@angular/material/table';
import {LoginService} from '../../shared-services/login.service';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mine-bookings.component.html',
  styleUrls: ['./mine-bookings.component.css']
})
export class MineBookingsComponent implements OnInit {
  public isUserLoggedIn = this.loginService.getisUserLoggedIn;

  public booking: BookingModel = new BookingModel();

  hentetBookings = [];
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'roomId', 'timeblock', 'month', 'day', 'delete'];

  constructor(private http: HttpClient,
              private httpHeader: httpheaderService,
              private deletedialogService: DeletedialogService,
              private loginService: LoginService) {}

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
        console.log(data);
        this.hentetBookings = data;
        this.listData = new MatTableDataSource(this.hentetBookings);
      });
  }

  confirmDeleteBooking(id: number) {
    this.deletedialogService.openDialog()
      .afterClosed().subscribe(response => {
        console.log(response);
        console.log(this.hentetBookings);

        if (response === true) {
          console.log(id);
          this.http.delete('http://ec2-3-21-232-61.us-east-2.compute.amazonaws.com:8080/bookings/' + id)
            .subscribe(() => {
              this.fetchData();
            });
        }
    });
  }
}
