import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Input() filsProperty: any;
  constructor() { }

  ngOnInit(): void {

    console.log(' fils component==>le contenu de la variable de mon pere ' + this.filsProperty)
  }

}
