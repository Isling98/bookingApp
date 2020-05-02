import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../shared-services/login.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BrugerService} from '../../shared-services/bruger.service';
import {Bruger} from '../../brugeroplysninger/bruger.model';


@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {
  constructor(private router: Router,
              private route: ActivatedRoute,
              private loginService: LoginService,
              private http: HttpClient,
              private brugerService: BrugerService) {
  }

  private headerString: string;
  public bruger: Bruger = this.brugerService.getBruger();

  ngOnInit(): void {
    console.log(this.loginService.getisUserLoggedIn);
  }

 onSubmit(e) {
   console.log(e);
   const brugernavn = e.target.elements[0].value;
   const adgangskode = e.target.elements[1].value;
   const body = {username: brugernavn, password: adgangskode};

   this.bruger.username = brugernavn;

// login api metode
   this.http.post<boolean>('http://ec2-3-21-232-61.us-east-2.compute.amazonaws.com:8081/login', body).subscribe
     (data => {
        this.loginService.setisUserLoggedIn = data; });
   setTimeout(() => {
            if (this.loginService.getisUserLoggedIn) {
                 this.loginService.setHTTPString = brugernavn + ':' + adgangskode;
                 this.brugerService.setBruger(this.bruger);
                 this.router.navigate(['/ny-booking'], {relativeTo: this.route});
               } else {
                 this.loginService.setisUserLoggedIn = false;
                 this.router.navigate(['/forkert-adgangskode'], {relativeTo: this.route});
             }}, 10000);
 }


  //       public login(brugernavn: string, adgangskode: string, loggetInd: boolean) {
  //       if (loggetInd) {
  //         this.loginService.setisUserLoggedIn = true;
  //         this.loginService.setHTTPString = brugernavn + ':' + adgangskode;
  //         this.brugerService.setBruger(this.bruger);
  //         this.router.navigate(['/ny-booking'], {relativeTo: this.route});
  //       } else {
  //         this.loginService.setisUserLoggedIn = false;
  //         this.router.navigate(['/forkert-adgangskode'], {relativeTo: this.route});
  //       }
  // }
}


