import { Component, OnInit } from '@angular/core';
import {BrugerService} from '../shared-services/bruger.service';
import {Bruger} from '../brugeroplysninger/bruger.model';
import {LoginService} from '../shared-services/login.service';

@Component({
  selector: 'app-gruppe25',
  templateUrl: './gruppe20.component.html',
  styleUrls: ['./gruppe20.component.css']
})
export class Gruppe20Component implements OnInit {
  public bruger: Bruger = this.brugerService.getBruger();
  public isUserLoggedIn = this.loginService.getUserLoggedIn();

  constructor(private brugerService: BrugerService,
              private loginService: LoginService) { }

  ngOnInit(): void {
  }

}
