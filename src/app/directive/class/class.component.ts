import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  milan = false
  barca = false
  est = false
  constructor() { }

  ngOnInit(): void {
  }

  changeTeam() {
    this.est = true
    this.barca = false
    this.milan = false
  }

}
