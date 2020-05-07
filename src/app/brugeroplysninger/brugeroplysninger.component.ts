import {Component, NgModule, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from '../shared-services/login.service';
import {BrugerService} from '../shared-services/bruger.service';
import {Bruger} from './bruger.model';
import {ngModuleJitUrl} from '@angular/compiler';
import {root} from 'rxjs/internal-compatibility';
import {newPasswordModel} from './newPassword.model';
import {AppRoutingModule} from '../app-routing.module';
import {Router, RouterModule} from '@angular/router';

@Component
({
  selector: 'app-bruger-oplysninger',
  templateUrl: './brugeroplysninger.component.html',
  styleUrls: ['./brugeroplysninger.component.css']
})


export class BrugeroplysningerComponent implements OnInit {

  public bruger: Bruger = this.brugerService.getBruger();
  public isUserLoggedIn = this.loginService.getisUserLoggedIn;
  url = 'http://ec2-3-21-232-61.us-east-2.compute.amazonaws.com:8081/';
  glPassword: string = '';
  nyePassword: string = '';
  username: string = this.brugerService.getBruger().username;


  changingPassword: boolean = false;
  passwordChanged: boolean = false;

  public newPasswordModel: newPasswordModel = new newPasswordModel();


  // Den nye kan findes her: http://ec2-3-21-232-61.us-east-2.compute.amazonaws.com:8081/
  // hvor i kan logge ind med username s180077 pass 061198

  constructor(private http: HttpClient,
              private loginService: LoginService,
              private brugerService: BrugerService,
              private router: Router) { }

  ngOnInit() {

  }


  skiftPassword(){
    this.changingPassword = true;
    this.newPasswordModel.currentPassword = (document.getElementById('glPassword') as HTMLInputElement).value;
    this.newPasswordModel.newPassword = (document.getElementById('nyePassword') as HTMLInputElement).value;
    this.newPasswordModel.username = this.username;
    this.http.put(this.url + 'users/newpassword', this.newPasswordModel, { headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Basic ' + btoa(this.loginService.getHTTPString)
      })}).subscribe((responseData => {
        console.log(this.newPasswordModel);
      console.log(responseData);
      this.changingPassword = false;
      this.passwordChanged = true;
      this.loginService.setisUserLoggedIn = false;
      this.logUd()
    }));


  }
  logUd() {
    this.loginService.setisUserLoggedIn = false;
    console.log(this.loginService.getisUserLoggedIn);
    this.router.navigate(['/login'])
  }
}
