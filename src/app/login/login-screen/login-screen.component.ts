import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../shared-services/login.service';
import {httpheaderService} from '../../shared-services/httpheader.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private loginService: LoginService,
              private httpheader: httpheaderService) { }

  ngOnInit(): void {
    console.log(this.loginService.getUserLoggedIn());
  }

  onSubmit(e) {
    console.log(e);
    const brugernavn = e.target.elements[0].value;
    const adgangskode = e.target.elements[1].value;
    console.log(brugernavn, adgangskode);


    //test med httpheader - gør ikke noget
    this.httpheader.httpheaderset(brugernavn, adgangskode);
    console.log(this.httpheader.httpheaderset(brugernavn, adgangskode));




    if (brugernavn === 'test' && adgangskode === 'test') {
      this.loginService.setUserLoggedIn(true);
      console.log(this.loginService.getUserLoggedIn());
      this.router.navigate(['/ny-booking'], {relativeTo: this.route});
    } else {
      this.loginService.setUserLoggedIn(false);
      console.log(this.loginService.getUserLoggedIn());
      this.router.navigate(['/forkert-adgangskode'], {relativeTo: this.route});


    }
  }
}
