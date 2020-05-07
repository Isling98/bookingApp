import { Component, OnInit } from '@angular/core';
import {LoginService} from '../shared-services/login.service';
import {BrugerService} from '../shared-services/bruger.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public loginService: LoginService, public brugerService: BrugerService) { }

  isuserloggedin: boolean = this.loginService.getisUserLoggedIn;

  ngOnInit(): void {
  }

  logUd() {
    this.loginService.setisUserLoggedIn = false;
    console.log(this.loginService.getisUserLoggedIn);
  }
}
