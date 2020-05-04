import { Injectable } from '@angular/core';
import {Bruger} from '../brugeroplysninger/bruger.model';

@Injectable({
  providedIn: 'root'
})
export class BrugerService {

  public bruger: Bruger = new Bruger(null, '', '', '', []);

  getBruger() {
    return this.bruger;
  }

  setBruger(bruger: Bruger) {
    this.bruger = bruger;
  }

  constructor() { }
}
