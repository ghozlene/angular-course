import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from 'src/app/model/Persone';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
export class ListCvComponent implements OnInit {
  @Input() personnes: Personne[];
  @Output() selectedPerson = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  selectPerson(selectedPerson: any) {
    this.selectedPerson.emit(selectedPerson)
  }
}
