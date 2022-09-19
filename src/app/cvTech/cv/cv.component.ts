import { Component, OnInit } from '@angular/core';
import { FirstServiceService } from 'src/app/first-service.service';
import { Personne } from 'src/app/model/Persone';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes: any;
  selectedPerson: Personne;
  constructor(private cvService: CvService) { }

  ngOnInit(): void {
    this.personnes = this.cvService.getPersonne()



  }
  selectPerson(personne: any) {
    this.selectedPerson = personne
  }
}
