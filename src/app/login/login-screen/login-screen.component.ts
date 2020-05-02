import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../shared-services/login.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {
  constructor(private router: Router,
              private route: ActivatedRoute,
              private loginService: LoginService,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    console.log(this.loginService.getisUserLoggedIn);
  }

  private headerString: string;

 onSubmit(e) {
   console.log(e);
   const brugernavn = e.target.elements[0].value;
   const adgangskode = e.target.elements[1].value;
   const body = {username: brugernavn, password: adgangskode};

// login api metode
   this.http.post<boolean>('http://localhost:8081/login', body).subscribe(
     (data => {
       this.login(brugernavn,adgangskode,data)
     }));
 }


        public login(brugernavn: string, adgangskode: string, loggetInd: boolean){
        if (loggetInd) {
          this.loginService.setisUserLoggedIn = true;
          this.headerString = brugernavn + ':' + adgangskode;
          this.loginService.httpString = this.headerString;
          this.router.navigate(['/ny-booking'], {relativeTo: this.route});
        }
        else {
          this.loginService.setisUserLoggedIn = false;
          this.router.navigate(['/forkert-adgangskode'], {relativeTo: this.route});
        }
  }
}


