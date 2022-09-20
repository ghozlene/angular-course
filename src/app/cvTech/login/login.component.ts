import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AthentificationService } from 'src/app/athentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authetificationService: AthentificationService,
    private router: Router) {


  }

  ngOnInit(): void {
  }

  login(credentials) {
    console.log(credentials);
    this.authetificationService.login(credentials).subscribe({

      next: (response) => {
        console.log(response);
        const token = response.id;
        const link = ["cv"];
        localStorage.setItem('token', token);
        this.router.navigate(link);
      }
    });
  }
}
