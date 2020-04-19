import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-lokale-booking',
  templateUrl: './lokale-booking.component.html',
  styleUrls: ['./lokale-booking.component.css']
})
export class LokaleBookingComponent implements OnInit {
  recipeForm: FormGroup;
  @Input() newBooking: {personer: number, dato: number, start: number, slut: number};


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
  highlightTidspunkt() {
    const click = document.getElementById('')
  }


}
