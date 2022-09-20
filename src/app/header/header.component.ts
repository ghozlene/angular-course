import { Component, OnInit } from '@angular/core';
import { AthentificationService } from '../athentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authentificationService: AthentificationService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authentificationService.logout();
  }
}
