import { Component, OnInit } from '@angular/core';
import {LoginService} from '../shared-services/login.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private loginService: LoginService) { }


  ngOnInit(): void {
  }

  logUd() {
    this.loginService.setUserLoggedIn(false);
  }
}
