import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-lokale-oversigt',
  templateUrl: './lokaleoversigt.component.html',
  styleUrls: ['./lokaleoversigt.component.css']
})
export class LokaleoversigtComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }


}
