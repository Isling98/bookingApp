import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BookingModel} from '../booking.model';
import {pipe} from 'rxjs';
import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {LoginService} from '../../shared-services/login.service';
import {httpheaderService} from '../../shared-services/httpheader.service';
import {Bruger} from '../../brugeroplysninger/bruger.model';
import {BrugerService} from '../../shared-services/bruger.service';
import {DeletedialogService} from '../../shared-services/deletedialog.service';
import {fakeAsync} from '@angular/core/testing';

@Component({
  selector: 'app-lokale-booking',
  templateUrl: './lokale-booking.component.html',
  styleUrls: ['./lokale-booking.component.css']
})
export class LokaleBookingComponent implements OnInit {
  public isUserLoggedIn = this.loginService.getisUserLoggedIn;
  url = 'http://ec2-3-21-232-61.us-east-2.compute.amazonaws.com:8081';
  hentetBookings = [];
  dato: Date = new Date();
  datearray = [];
  date;
  timeblockarray = [];
  amountoftimeblocks = [];


//booleans
  showstueetage: boolean = false;
  shows1sal: boolean = false;
  showforeloebige: boolean = false;
  opretbookingknap: boolean = false;



  //boolean for rumledighed
  //Stue lokale 1
  stue108til12: boolean = true;
  stue112til16: boolean = true;
  stue116til20: boolean = true;
  stue120til24: boolean = true;

  //Stue lokale 2
  stue208til12: boolean = true;
  stue212til16: boolean = true;
  stue216til20: boolean = true;
  stue220til24: boolean = true;

  //stue lokale 3
  stue308til12: boolean = true;
  stue312til16: boolean = true;
  stue316til20: boolean = true;
  stue320til24: boolean = true;

  //stue lokale 4
  stue408til12: boolean = true;
  stue412til16: boolean = true;
  stue416til20: boolean = true;
  stue420til24: boolean = true;

  //stue lokale 5
  stue508til12: boolean = true;
  stue512til16: boolean = true;
  stue516til20: boolean = true;
  stue520til24: boolean = true;

  //stue lokale 6
  stue608til12: boolean = true;
  stue612til16: boolean = true;
  stue616til20: boolean = true;
  stue620til24: boolean = true;


  //lokalearray
  lokalearray = [0, 1, 2, 3, 4, 5, 6];


  showTimeblocks: boolean = true;


  public newBooking: BookingModel = new BookingModel();
  public bruger: Bruger = this.brugerService.getBruger();


  constructor(private http: HttpClient,
              private loginService: LoginService,
              private brugerService: BrugerService,
              private dialogService: DeletedialogService) {
  }

  ngOnInit(): void {
    if (this.loginService.getisUserLoggedIn) {
      // Test med opdeling af data:
      this.http.get<JSON>('http://ec2-3-21-232-61.us-east-2.compute.amazonaws.com:8081/users/username/'
        + this.brugerService.getBruger().username,
        { headers: new HttpHeaders({
            'Content-Type':  'application/json',
            Authorization: 'Basic ' + btoa(this.loginService.getHTTPString)
          })}).subscribe
      (data => {this.bruger.id = data['id']; this.bruger.username = data['username'];
        this.bruger.firstName = data['firstName']; this.bruger.lastName = data['lastName'];
        this.bruger.bookingList = data['bookingList'];
        this.bruger.campusId = data['campusId'];
      });

      // Venter på at data er hentet helt ned og skriver så til bruger.service.
      setTimeout(() => {
          console.log(this.bruger);
          this.brugerService.setBruger(this.bruger);
          console.log(this.brugerService.getBruger());
        },
        4000);
    } else { this.bruger = null; }
  }


  // Booking
  hentbooking() {

    this.http.get<JSON>(this.url + '/bookings/findByDate/' + this.datearray[1] + '/' + this.datearray[0] + '/' + this.datearray[2], { headers: new HttpHeaders({
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



        this.timeblockarray.length = data.length;
        this.clearbooleans();
        for (let i = 0; i < this.timeblockarray.length; i++) {
          this.timeblockarray[i] = new BookingModel();
          this.timeblockarray[i]['timeblock'] = data[i]['timeblock'];
          this.timeblockarray[i]['roomId'] = data[i]['roomId'];
          if (this.timeblockarray[i]['roomId'] == 1) {
          if (this.timeblockarray[i]['timeblock'] == 1) {
            this.stue108til12 = false;

          } else if (this.timeblockarray[i]['timeblock'] == 2) {
            this.stue112til16 = false;

          } else if (this.timeblockarray[i]['timeblock'] == 3) {
            this.stue116til20 = false;

          } else if (this.timeblockarray[i]['timeblock'] == 4) {
            this.stue120til24 = false;

          }
        }
          if (this.timeblockarray[i]['roomId'] == 2) {
            if (this.timeblockarray[i]['timeblock'] == 1) {
              this.stue208til12 = false;
            } else if (this.timeblockarray[i]['timeblock'] == 2) {
              this.stue212til16 = false;
            } else if (this.timeblockarray[i]['timeblock'] == 3) {
              this.stue216til20 = !this.stue216til20;
            } else if (this.timeblockarray[i]['timeblock'] == 4) {
              this.stue220til24 = false;
            }
          }
          if (this.timeblockarray[i]['roomId'] == 3){
            if (this.timeblockarray[i]['timeblock'] == 1) {
              this.stue308til12 = false;
            } else if (this.timeblockarray[i]['timeblock'] == 2) {
              this.stue312til16 = false;
            } else if (this.timeblockarray[i]['timeblock'] == 3) {
              this.stue316til20 = !this.stue216til20;
            } else if (this.timeblockarray[i]['timeblock'] == 4) {
              this.stue320til24 = false;
            }
          }
          if (this.timeblockarray[i]['roomId'] == 4) {
            if (this.timeblockarray[i]['timeblock'] == 1) {
              this.stue408til12 = false;
            } else if (this.timeblockarray[i]['timeblock'] == 2) {
              this.stue412til16 = false;
            } else if (this.timeblockarray[i]['timeblock'] == 3) {
              this.stue416til20 = !this.stue216til20;
            } else if (this.timeblockarray[i]['timeblock'] == 4) {
              this.stue420til24 = false;
            }
          }
            if (this.timeblockarray[i]['roomId'] == 5) {
              if (this.timeblockarray[i]['timeblock'] == 1) {
                this.stue508til12 = false;
              } else if (this.timeblockarray[i]['timeblock'] == 2) {
                this.stue512til16 = false;
              } else if (this.timeblockarray[i]['timeblock'] == 3) {
                this.stue516til20 = !this.stue216til20;
              } else if (this.timeblockarray[i]['timeblock'] == 4) {
                this.stue520til24 = false;
              }
          }
          if (this.timeblockarray[i]['roomId'] == 6) {
            if (this.timeblockarray[i]['timeblock'] == 1) {
              this.stue608til12 = false;
            } else if (this.timeblockarray[i]['timeblock'] == 2) {
              this.stue612til16 = false;
            } else if (this.timeblockarray[i]['timeblock'] == 3) {
              this.stue616til20 = !this.stue216til20;
            } else if (this.timeblockarray[i]['timeblock'] == 4) {
              this.stue620til24 = false;
            }
          }
          this.timeblockarray[i]['username'] = data[i]['username'];
          this.timeblockarray[i]['id'] = data[i]['id'];


        }

        this.showforeloebige = true;
        this.hentetBookings = data;

      });
    this.resettidsrum();


  }

  updatedato() {
    this.showforeloebige = false;
    this.date = (document.getElementById('datepicker') as HTMLInputElement).value;
    this.datearray = this.date.split('/');
    this.newBooking.day = this.datearray[1] as number;
    this.newBooking.month = this.datearray[0] as number;
    this.newBooking.year = this.datearray[2] as number;

  }


  refresh() {
    this.updatedato();
    this.hentbooking();
  }

// Opret Booking
  opretBooking() {
    this.updatedato();
    this.newBooking.month = this.datearray[0];
    this.newBooking.year = this.datearray[2];
    this.newBooking.day = this.datearray[1];
    this.showforeloebige = true;
    console.log(this.newBooking);

    this.dialogService.openDialogconfirm()
      .afterClosed().subscribe(response => {

      console.log(response);
      console.log(this.hentetBookings);

      if (response === true) {
        this.http.post(this.url + '/bookings/', JSON.stringify(this.newBooking), { headers: new HttpHeaders({
            'Content-Type':  'application/json',
            Authorization: 'Basic ' + btoa(this.loginService.getHTTPString)
          })}).subscribe(responseData => {
          console.log(responseData);
          this.refresh()
          this.opretbookingknap = false;
        });
      }
    });


  }

//Timeblock opdatering så man kan se det i den foreløbige booking
  addTimeblockandroomId(timeblock: number, roomId: number) {
    this.newBooking.timeblock = timeblock;

    if (timeblock == 1) {
      this.amountoftimeblocks[0] = "08:00-12:00";
    } else if (timeblock == 2) {
      this.amountoftimeblocks[0] = "12:00-16:00";
    } else if (timeblock == 3) {
      this.amountoftimeblocks[0] = "16:00-20:00";
    } else {
      this.amountoftimeblocks[0] = "20:00-24:00";
    }

    this.newBooking.roomId = roomId;
    this.newBooking.timeblock = timeblock;
    this.opretbookingknap = true;
  }

  resettidsrum(){
    this.amountoftimeblocks.pop();
    this.opretbookingknap = false;
    this.newBooking.roomId = null;
  }

  clearbooleans(){
    this.stue108til12 = true;
    this.stue112til16 = true;
    this.stue116til20 = true;
    this.stue120til24 = true;

    this.stue208til12 = true;
    this.stue212til16 = true;
    this.stue216til20 = true;
    this.stue220til24 = true;

    this.stue308til12 = true;
    this.stue312til16 = true;
    this.stue316til20 = true;
    this.stue320til24 = true;

    this.stue408til12 = true;
    this.stue412til16 = true;
    this.stue416til20 = true;
    this.stue420til24 = true;

    this.stue508til12 = true;
    this.stue512til16 = true;
    this.stue516til20 = true;
    this.stue520til24 = true;

    this.stue608til12 = true;
    this.stue612til16 = true;
    this.stue616til20 = true;
    this.stue620til24 = true;

  }
}
