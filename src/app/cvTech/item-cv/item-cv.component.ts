import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from 'src/app/model/Persone';
@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {
  @Input() personne: Personne;
  @Output() selectedPerson = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


  selectPerson() {

    //put event to inject the person

    this.selectedPerson.emit(this.personne)

  }

}
