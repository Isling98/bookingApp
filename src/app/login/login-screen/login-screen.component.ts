import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {
  userLoggedIn = false;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(e) {
    console.log(e);
    const brugernavn = e.target.elements[0].value;
    const adgangskode = e.target.elements[1].value;
    console.log(brugernavn, adgangskode);

    if (brugernavn === 'test' && adgangskode === 'test') {
      this.userLoggedIn = true;
      this.router.navigate(['/ny-booking'], {relativeTo: this.route});
    } else {
      this.userLoggedIn = false;
      this.router.navigate(['/forkert-adgangskode'], {relativeTo: this.route});


    }
  }
}
