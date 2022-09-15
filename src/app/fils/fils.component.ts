import { Component, OnInit, Output, EventEmitter, Input, } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Input() filsProperty: any;
  @Output() sendRequesttoParent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {

    console.log(' fils component==>le contenu de la variable de mon pere ' + this.filsProperty)
  }
  sendEvent() {
    this.sendRequesttoParent.emit(
      `hi parent i need to get more money here`
    )
  }
}
