import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ConfirmDeleteComponent} from '../confirm-delete/confirm-delete.component';
import {ConfirmOpretComponent} from '../bookings/lokale-booking/confirm-opret/confirm-opret.component';

@Injectable({
  providedIn: 'root'
})
export class DeletedialogService {

  constructor(private dialog: MatDialog) { }

  openDialog() {
    return this.dialog.open(ConfirmDeleteComponent, {width: '500px', disableClose: true});
  }

  openDialogconfirm(){
    return this.dialog.open(ConfirmOpretComponent, {width: '500px', disableClose: true})
  }


}
