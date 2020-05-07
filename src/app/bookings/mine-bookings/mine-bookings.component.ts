import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {BookingModel} from '../booking.model';
import {map} from 'rxjs/operators';
import {httpheaderService} from '../../shared-services/httpheader.service';
import {DeletedialogService} from '../../shared-services/deletedialog.service';
import {MatTableDataSource} from '@angular/material/table';
import {LoginService} from '../../shared-services/login.service';
import {BrugerService} from '../../shared-services/bruger.service';

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
  displayedColumns: string[] = ['roomId', 'timeblock', 'day', 'delete'];
  harhentetbookings: boolean = false;

  constructor(private http: HttpClient,
              private httpHeader: httpheaderService,
              private deletedialogService: DeletedialogService,
              private loginService: LoginService,
              private brugerService: BrugerService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  public fetchData() {
    this.http.get<JSON>('http://ec2-3-21-232-61.us-east-2.compute.amazonaws.com:8081/bookings/user/'
    + this.brugerService.getBruger().username + '/upcoming',
      { headers: new HttpHeaders({
          'Content-Type':  'application/json',
          Authorization: 'Basic ' + btoa(this.loginService.getHTTPString)
        })})
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
        this.harhentetbookings = true;
      });
  }

  confirmDeleteBooking(id: number) {
    this.deletedialogService.openDialog()
      .afterClosed().subscribe(response => {
        console.log(response);
        console.log(this.hentetBookings);

        if (response === true) {
          console.log(id);
          this.http.delete('http://ec2-3-21-232-61.us-east-2.compute.amazonaws.com:8081/bookings/' + id,
            { headers: new HttpHeaders({
              'Content-Type':  'application/json',
              Authorization: 'Basic ' + btoa(this.loginService.getHTTPString)})})
            .subscribe(() => {
              this.fetchData();
            });
        }
    });
  }

  convertTime(timeblock: number){
    if (timeblock == 1){
      return "08-12"
    } else if (timeblock == 2){
      return "12-16"
    } else if (timeblock == 3){
      return "16-20"
    } else if (timeblock == 4){
      return "20-24"
    }
  }
}
