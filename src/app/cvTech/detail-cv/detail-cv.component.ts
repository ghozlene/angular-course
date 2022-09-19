import { Component, OnInit, Input } from '@angular/core';
import { Personne } from 'src/app/model/Persone';
import { HiringService } from '../hiring.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  @Input() personne: Personne;
  constructor(private hiringService: HiringService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  hiring() {
    this.hiringService.hiring(this.personne)
  }
  moreInfo() {
    const link = ['cv', this.personne.id]
    this.router.navigate(link)
  }
}
