import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/Persone';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes: any;
  selectedPerson: Personne;
  constructor() { }

  ngOnInit(): void {
    this.personnes = [
      new Personne(1, 'ghozlene', 'achref', 25, 'rotating_card_profile3.png', 54140, 'dev'),
      new Personne(2, 'morgan', 'ahmed', 35, 'rotating_card_profile2.png', 254870, 'designer'),
      new Personne(3, 'ali', 'adta', 35, '', 32568, 'test'),
    ]


  }
  selectPerson(personne: any) {
    this.selectedPerson = personne
  }
}
