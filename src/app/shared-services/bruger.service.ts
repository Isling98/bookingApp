import { Injectable } from '@angular/core';
import {JavabogBruger} from '../brugeroplysninger/javabog-bruger.model';
import {Bruger} from '../brugeroplysninger/bruger.model';

@Injectable({
  providedIn: 'root'
})
export class BrugerService {

/*  public javabogBruger: JavabogBruger = new JavabogBruger('s123456', 's123456@student.dtu.dk',
    '21:22', 'ukendt', 'demobruger', 'Dennis',
    'Demostudent', '<IKKE OFFENTLIG>', 'Tennis og programmering',
    'http://www.diplom.dtu.dk/');*/

  public bruger: Bruger = new Bruger(null, '', '', '', []);

/*  getJavabogBruger() {
    return this.javabogBruger;
  }*/

  getBruger() {
    return this.bruger;
  }

  setBruger(bruger: Bruger) {
    this.bruger = bruger;
  }

  constructor() { }
}
