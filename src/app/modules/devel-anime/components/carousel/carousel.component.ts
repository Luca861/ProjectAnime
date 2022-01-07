import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  imageOne: string = `${environment.imageOneCarousel}`;
  imageTwo: string = `${environment.imageTwoCarousel}`;
  imageThree: string = `${environment.imageThreeCarousel}`;

  constructor() { }

  ngOnInit(): void {
  }

}

