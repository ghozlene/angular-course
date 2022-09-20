import { Component, OnInit } from '@angular/core';
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
    this.cvService.getPersonne().subscribe(
      {
        next: (personnes) => { this.personnes = personnes; },

        error: (error) => {
          console.log(error);
          this.personnes = this.cvService.getFakePersonne();
        }

      },
    );



  }
  selectPerson(personne: any) {
    this.selectedPerson = personne;
  }
}
