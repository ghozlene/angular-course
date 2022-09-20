import { HttpClient, HttpParams } from '@angular/common/http';
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

  getPersonById(id: number): Observable<Personne> {
    return this.http.get<Personne>(this.link + `/${id}`);


  };

  addPersonne(personne: Personne): Observable<any> {
    // const token = localStorage.getItem('token');
    // if (token) {
    //   const params = new HttpParams().set('access_token', token);
    //   return this.http.post(this.link, personne, { params });
    // }
    return this.http.post(this.link, personne);
  };

  deletePerson(id): Observable<any> {
    return this.http.delete(this.link + `/${id}`);
  }

}
