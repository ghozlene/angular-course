import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from '../model/Persone';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[];
  link = 'http://localhost:3000/api/personnes';



  constructor(private http: HttpClient

  ) {



    this.personnes = [
      new Personne(1, 'ghozlene', 'achref', 25, 'rotating_card_profile3.png', 54140, 'dev'),
      new Personne(2, 'morgan', 'ahmed', 35, 'rotating_card_profile2.png', 254870, 'designer'),
      new Personne(3, 'ali', 'adta', 35, '', 32568, 'test'),
    ];
  }
  getPersonne(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this.link);
  }

  getFakePersonne() {
    return this.personnes;
  }

  getPersonById(id: number): Personne {
    const personne = this.personnes.find(person => {

      return person.id == id;
    });
    return personne!;
  }
  addPersonne(personne: Personne): void {
    console.log(personne);
    personne.id = this.personnes.length;

    this.personnes.push(personne);
  }

}
