import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.css']
})
export class StylesComponent implements OnInit {
  @Input() color = 'blue';
  @Input() bgColor = 'green';
  size = '25px'
  constructor() { }

  ngOnInit(): void {
  }

  changeSize(size) {
    this.size = size + 'px'
  }
}
