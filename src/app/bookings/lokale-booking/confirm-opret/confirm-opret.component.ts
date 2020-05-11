import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-opret',
  templateUrl: './confirm-opret.component.html',
  styleUrls: ['./confirm-opret.component.css']
})
export class ConfirmOpretComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmOpretComponent>) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
