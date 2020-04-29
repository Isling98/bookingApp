import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ConfirmDeleteComponent} from '../confirm-delete/confirm-delete.component';

@Injectable({
  providedIn: 'root'
})
export class DeletedialogService {

  constructor(private dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ConfirmDeleteComponent, {width: '500px', disableClose: true});
  }


}
