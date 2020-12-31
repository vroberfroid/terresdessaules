import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  images: string[];
  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.images = ['assets/img/accueil1.jpg',
      'assets/img/accueil2.jpg',
      // 'https://drive.google.com/uc?export=view&id=1sQAabWsk6HmBAfs3lyFK-QyjlAozGhmp',
      // tslint:disable-next-line:max-line-length
      // 'https://drive.google.com/uc?export=view&id=1z2pjzg5TmB8S4Q9nFb-0ya0tTLra8OfL',
      'assets/img/accueil3.jpg',
      'assets/img/accueil4.jpg'];
  }
}
