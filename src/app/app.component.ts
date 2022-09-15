import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courseAngular';
  bgColor = 'red'
  show = false

  changeStatus = () => {
    return (
      this.show = !this.show
    )
  }
}
