import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/model/Persone';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResult: Personne[];
  chaine = "";
  constructor(
    private cvService: CvService
    , private router: Router
  ) { }

  ngOnInit(): void {
    this.searchResult = [];
  }

  search() {
    const name = this.chaine.trim();

    if (name.length) {
      this.cvService.findByName(name).subscribe({
        next: (personnes) => {
          console.log(personnes);
          this.searchResult = personnes;
        }
      });

    } else {
      this.searchResult = [];
    }


  }
  selectPerson(personne: Personne) {
    const link = ['cv', personne.id];
    this.router.navigate(link);
    this.searchResult = [];
    this.chaine = '';

  }

}
