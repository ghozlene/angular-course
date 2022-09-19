import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';
import { Router, ActivatedRoute } from '@angular/router'
import { Personne } from 'src/app/model/Persone';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  personne: Personne
  constructor(
    private cvService: CvService,
    private activatedRoute: ActivatedRoute,


  ) { }







  ngOnInit(): void {

    this.activatedRoute.params.subscribe(parm => {
      this.personne = this.cvService.getPersonById(parm.id)
      console.log(parm.id)
    }




    )
  }

}
