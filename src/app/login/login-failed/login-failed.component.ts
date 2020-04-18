import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-failed',
  templateUrl: './login-failed.component.html',
  styleUrls: ['./login-failed.component.css']
})
export class LoginFailedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onMailSubmit(e) {
    const mailadresse = e.target.elements[0].value.toString();
    console.log(mailadresse);
  }
}
