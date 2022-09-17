import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  table = ['blue', 'lightblue', 'green', 'lightgreen', 'pink', 'yellow', 'lightyellow', 'gold', 'silver', 'gray', 'lightgray']
  @HostBinding('style.borderColor') borderColor = ''
  @HostBinding('style.color') color = ''


  @HostListener('keypress') changeColor() {
    const index = Math.floor(Math.random() * this.table.length - 1)
    this.borderColor = this.table[index]
    this.color = this.table[index]
  }
  constructor() { }

}
