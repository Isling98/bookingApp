import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(e) {
    console.log(e);
    const brugernavn = e.target.elements[0].value;
    const adgangskode = e.target.elements[1].value;
    console.log(brugernavn, adgangskode);

    if (brugernavn === 'test' && adgangskode === 'test') {
      this.router.navigate(['bookingTemplate.ts']);
    }
    return false;
  }
}
