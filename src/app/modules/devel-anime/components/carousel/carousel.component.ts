import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
imageOne: string = 'https://img.wallpapersafari.com/desktop/1920/1080/48/59/J8faFX.jpg';
imageTwo: string = 'https://3.bp.blogspot.com/-Yt0TlLAen40/XSRKIEy-85I/AAAAAAAAAjs/_rZ0iVQWkqAPVmyutfNTKjVcA4_RLtA_QCKgBGAs/w1920-h1080-c/mikasa-levi-colossal-titan-attack-on-titan-uhdpaper.com-8K-160.jpg';
imageThree: string = 'https://www.ammazzacaffe.org/wp-content/uploads/2021/05/violetevergarden_s.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}

