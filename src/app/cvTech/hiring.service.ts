import { Injectable } from '@angular/core';
import { Personne } from '../model/Persone';

@Injectable({
  providedIn: 'root'
})
export class HiringService {

  private personnes: Personne[]
  constructor() {

    this.personnes = [];
  }

  getHiring(): Personne[] {
    return this.personnes;
  }
  hiring(personne: Personne) {
    const index = this.personnes.indexOf(personne)
    if (index < 0) {
      this.personnes.push(personne)
    } else {
      alert(`${personne.name} is already in`)
    }

  }
  fire(personne: Personne) {
    const index = this.personnes.indexOf(personne)
    if (index >= 0) {
      this.personnes.splice(index, 1)
    }
  }
}
