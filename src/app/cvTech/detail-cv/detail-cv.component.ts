import { Component, OnInit, Input } from '@angular/core';
import { Personne } from 'src/app/model/Persone';
import { HiringService } from '../hiring.service';
@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  @Input() personne: Personne;
  constructor(private hiringService: HiringService) { }

  ngOnInit(): void {
  }

  hiring() {
    this.hiringService.hiring(this.personne)
  }

}
