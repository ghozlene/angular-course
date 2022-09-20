import { Component, OnInit } from '@angular/core';
import { AthentificationService } from '../athentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public get authentificationService(): AthentificationService {
    return this._authentificationService;
  }
  public set authentificationService(value: AthentificationService) {
    this._authentificationService = value;
  }

  constructor(private _authentificationService: AthentificationService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authentificationService.logout();
  }
}
