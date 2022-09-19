import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  myObservable: Observable<any>;
  myImages = [
    'cv.jpg',
    'error.jpg',
    'rotating_card_profile.png',
    'rotating_card_profile3.png'
  ];

  currentImage: string;
  constructor() { }

  ngOnInit(): void {
    this.myObservable = new Observable(

      (observer) => {
        let i = this.myImages.length - 1;
        setInterval(() => {
          observer.next(this.myImages[i]);
          if (i > 0) {
            i--;
          } else {
            i = this.myImages.length - 1;
          }

        }, 1000);
      }
    );
    this.myObservable.subscribe(

      (resut) => {
        console.log(resut);
        this.currentImage = resut;
      }
    );
  }

}
