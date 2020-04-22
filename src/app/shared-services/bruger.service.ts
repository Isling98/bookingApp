import { Injectable } from '@angular/core';
import {Bruger} from '../brugeroplysninger/bruger.model';

@Injectable({
  providedIn: 'root'
})
export class BrugerService {

  public bruger: Bruger = new Bruger('s123456', 's123456@student.dtu.dk',
    '21:22', 'ukendt', 'demobruger', 'Dennis',
    'Demostudent', '<IKKE OFFENTLIG>', 'Tennis og programmering',
    'http://www.diplom.dtu.dk/');

  getBruger() {
    return this.bruger;
  }

  constructor() { }
}
