import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/Persone';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes: any;
  constructor() { }

  ngOnInit(): void {
    this.personnes = [
      new Personne(1, 'ghozlene', 'achref', 25, 'rotating_card_thumb2.png', 54140, 'dev'),
      new Personne(2, 'morgan', 'ahmed', 35, 'rotating_card_thumb1.png', 25154870, 'designer'),

    ]
  }

}
