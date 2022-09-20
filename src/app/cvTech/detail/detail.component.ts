import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Personne } from 'src/app/model/Persone';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  personne: Personne;
  constructor(
    private cvService: CvService,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) { }




  deletePerson() {
    this.cvService.deletePerson(this.personne.id).subscribe(
      {
        next: (resp) => {
          const link = ['cv'];
          this.router.navigate(link);
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }





  ngOnInit(): void {

    this.activatedRoute.params.subscribe(parm => {
      this.cvService.getPersonById(parm.id).subscribe({
        next: (personne) => {
          this.personne = personne;
        },
        error: (error) => {
          console.log(error);
        }
      });

    }




    );
  }

}
