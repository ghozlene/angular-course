import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/model/Persone';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-update-cv',
  templateUrl: './update-cv.component.html',
  styleUrls: ['./update-cv.component.css']
})
export class UpdateCvComponent implements OnInit {
  personne: Personne;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parm => {
      this.cvService.getPersonById(parm.id).subscribe({
        next: (personne) => {
          console.log(personne);
          this.personne = personne;
        },
        error: (error) => {
          console.log(error);
        }
      });

    });
  }
  updatePerson() {
    return this.cvService.updatePerson(this.personne).subscribe({
      next: (response) => {

        const link = ['cv'];
        this.router.navigate(link);

      },
      error: (err) => {
        console.log(err);
      }
    }
    );
  }
}
