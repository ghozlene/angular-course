import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CvService } from '../cv.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {
  errorMessage = '';
  constructor(private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addPerson(form: NgForm) {
    this.cvService.addPersonne(form.value).subscribe({
      next: (response) => {
        const link = ['cv'];
        this.router.navigate(link);
      },
      error: (error) => {
        console.log(error.message);
      }
    });


  }
}
