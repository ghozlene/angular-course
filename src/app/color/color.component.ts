import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color = 'red';


  constructor() { }

  ngOnInit(): void {
  }


  changeColor(input: any) {
    console.log(input.value)
    this.color = input.value
    input.value = ''
  }
}
