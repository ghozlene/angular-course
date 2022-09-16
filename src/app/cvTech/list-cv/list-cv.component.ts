import { Component, OnInit, Input } from '@angular/core';
import { Personne } from 'src/app/model/Persone';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
export class ListCvComponent implements OnInit {
  @Input() personnes: Personne[];
  constructor() { }

  ngOnInit(): void {
  }

}
