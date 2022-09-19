import { Injectable } from '@angular/core';

@Injectable()
export class FirstServiceService {
  data = [
    'data1', 'data2', 'data3', 'data4'
  ]
  constructor() { }

  logger(data) {
    console.log(this.data)
    console.log(data)
  }
  addData(data) {
    this.data.push(data)
  }
}
