import {Component, Input, OnInit} from '@angular/core';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-galleria',
  templateUrl: './galleria.component.html',
  styleUrls: ['./galleria.component.scss']
})
export class GalleriaComponent implements OnInit {
  imageSelected: VRImage;
  @Input() images: VRImage[];

  constructor() { }

  ngOnInit() {
    this.imageSelected = this.images[0];
    for (const img of this.images) {
      img.opacity = '0.5';
    }
  }

  onImageSelected(imgSrc: VRImage) {
    this.imageSelected = imgSrc;
  }

  onMouseOver(imgSrc: VRImage) {
     imgSrc.opacity = '1';
  }

  onMouseLeave(imgSrc: VRImage) {
    imgSrc.opacity = '0.5';
  }
}
