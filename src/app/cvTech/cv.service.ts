import { Injectable } from '@angular/core';
import { Personne } from '../model/Persone';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[];

  constructor() {
    this.personnes = [
      new Personne(1, 'ghozlene', 'achref', 25, 'rotating_card_profile3.png', 54140, 'dev'),
      new Personne(2, 'morgan', 'ahmed', 35, 'rotating_card_profile2.png', 254870, 'designer'),
      new Personne(3, 'ali', 'adta', 35, '', 32568, 'test'),
    ]
  }
  getPersonne(): Personne[] {
    return this.personnes
  }
}
