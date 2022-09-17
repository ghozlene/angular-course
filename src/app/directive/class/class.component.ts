import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  team = ['est', 'psg', 'realMadrid', 'atl', 'bayren']

  milan = false
  barca = false
  est = false
  show = true
  constructor() { }

  ngOnInit(): void {
  }

  changeTeam() {
    this.est = true
    this.barca = false
    this.milan = false
  }

}
