import { Component, OnInit } from '@angular/core';
import { FirstServiceService } from '../first-service.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  providers: [FirstServiceService]
})
export class ColorComponent implements OnInit {
  color = 'red';


  constructor(private fService: FirstServiceService) { }

  ngOnInit(): void {
  }

  proccessReq(message: any) {
    console.log(message)
  }
  loggerMyData() {
    this.fService.logger('test')
  }
}
