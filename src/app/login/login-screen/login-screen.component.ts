import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../shared-services/login.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BrugerService} from '../../shared-services/bruger.service';
import {Bruger} from '../../brugeroplysninger/bruger.model';
import {NgForm} from '@angular/forms';


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

  public bruger: Bruger = this.brugerService.getBruger();

  korrektlogin: boolean = false;
  ventVenligst: boolean = false;

  ngOnInit(): void {
    console.log(this.loginService.getisUserLoggedIn);
  }

 onSubmit(form: NgForm) {
   console.log(form);
   const brugernavn = form.value.brugernavn;
   const adgangskode = form.value.adgangskode;
   const body = {username: brugernavn, password: adgangskode};
   this.korrektlogin = false;
   this.ventVenligst = true;

   // Giver det tomme brugerobjekt et studienummer, der kan bruges til næste GET-kald i brugeroplysninger.ts
   this.bruger.username = brugernavn;

// login api metode
   this.http.post<boolean>('http://ec2-3-21-232-61.us-east-2.compute.amazonaws.com:8081/login', body).subscribe
     (data => {
        this.loginService.setisUserLoggedIn = data; }); // Gemmer returneret boolean for login.
   setTimeout(() => {
            if (this.loginService.getisUserLoggedIn) {
                 this.loginService.setHTTPString = brugernavn + ':' + adgangskode;
                 this.brugerService.setBruger(this.bruger);
                 this.router.navigate(['/ny-booking'], {relativeTo: this.route});
               } else {
                 this.loginService.setisUserLoggedIn = false;
                  this.korrektlogin = true;
                  this.ventVenligst = false;

                 //this.router.navigate(['/forkert-adgangskode'], {relativeTo: this.route});
             }}, 4000);


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


