import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/Persone';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResult: Personne[];
  constructor() { }

  ngOnInit(): void {
    this.searchResult = [];
  }

  search(search) {


  }
  selectPerson(personne: Personne) {
    console.log(personne);
  }
}
