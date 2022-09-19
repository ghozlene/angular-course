import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/Persone';
import { HiringService } from '../hiring.service';

@Component({
  selector: 'app-hiring',
  templateUrl: './hiring.component.html',
  styleUrls: ['./hiring.component.css']
})
export class HiringComponent implements OnInit {
  personnes: Personne[]
  constructor(private hiringService: HiringService) { }

  ngOnInit(): void {
    this.personnes = this.hiringService.getHiring()
  }

}
