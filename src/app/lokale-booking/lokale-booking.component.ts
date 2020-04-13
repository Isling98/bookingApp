import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lokale-booking',
  templateUrl: './lokale-booking.component.html',
  styleUrls: ['./lokale-booking.component.css']
})
export class LokaleBookingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showhide() {
    const click = document.getElementById('drop-content');
    if (click.style.display === 'none') {
      click.style.display = 'block';
    } else {
      click.style.display = 'none';
    }
  }

}
