import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ImageService} from '../../../services/shared/image.service';
import {VRImage} from '../../../models/image.model';

@Component({
  selector: 'app-galleria',
  templateUrl: './galleria.component.html',
  styleUrls: ['./galleria.component.scss']
})
export class GalleriaComponent implements OnInit {

  imageSelected: VRImage;
  @Input() images: VRImage[];
  imageSourceClicked: string;
  imageClicked: VRImage;
  heightOfSelectedImage: number;
  widthOfSelectedImage: number;
  @Output() onClickSelectedImage: EventEmitter<any> = new EventEmitter();

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageSelected = this.images[0];
    for (const img of this.images) {
      img.opacity = '0.5';
    }

  }

  onImageSelected(imgSrc: VRImage) {
    this.imageSelected = imgSrc;
  }

  loadedImg(event: Event, image: VRImage) {
     image.width = (<HTMLImageElement>event.target).width;
     image.height = (<HTMLImageElement>event.target).height;
  }

  onClickImageSelected(event: MouseEvent) {
    const img = <HTMLImageElement>event.target;
    this.imageClicked = new VRImage(img.src, '0.5', img.width, img.height);
    this.imageSourceClicked = this.imageClicked.source;
    if (window.innerWidth / this.imageClicked.width > window.innerHeight / this.imageClicked.height) {
      this.heightOfSelectedImage = window.innerHeight;
      this.widthOfSelectedImage = this.imageClicked.width * window.innerHeight / this.imageClicked.height;
    } else {
      this.widthOfSelectedImage = window.innerWidth;
      this.heightOfSelectedImage = this.imageClicked.height * window.innerWidth / this.imageClicked.width;
    }
    // this.imageService.setImageSelected();
  }

  onCloseImage() {
    this.imageSourceClicked = null;
    this.imageService.clearImageSelected();
  }

  getSelectedImageWidth() {
    return this.widthOfSelectedImage - 30 +  'px';
  }

  getSelectedImageWidthContainer() {
    return this.widthOfSelectedImage - 20 + 'px';
  }
  getSelectedImageHeight() {
    return this.heightOfSelectedImage - 30 + 'px';
  }

  getSelectedImageHeightContainer() {
    return this.heightOfSelectedImage - 20 + 'px';
  }
}
