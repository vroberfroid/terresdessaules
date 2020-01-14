import {Component, Input, OnInit} from '@angular/core';
import {ImageService} from '../../../services/shared/image.service';
import {VRImage} from '../../../models/image.model';
import {animate, keyframes, transition, trigger} from '@angular/animations';
import * as kf from './keyframe';

@Component({
  selector: 'app-galleria',
  templateUrl: './galleria.component.html',
  styleUrls: ['./galleria.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition('* => slideOutLeft', animate(1000, keyframes(kf.slideOutLeft))),
      transition('* => slideInRight', animate(1000, keyframes(kf.slideInRight))),
      transition('* => slideInLeft', animate(1000, keyframes(kf.slideInLeft))),
      transition('* => slideOutRight', animate(1000, keyframes(kf.slideOutRight))),
    ])
  ]
})
export class GalleriaComponent implements OnInit {

  @Input() images: VRImage[];
  imageHeight = 300;
  imageSourceClicked: string;
  imageClicked: VRImage;
  heightOfSelectedImage: number;
  widthOfSelectedImage: number;
  // @Output() onClickSelectedImage: EventEmitter<any> = new EventEmitter();

  animationExitState: string;
  animationInRightState: string;
  animationInLeftState: string;
  animation: string;
  activeImage = 0;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.changeOpacity(this.activeImage);
  }

  onImageSelected(i: number) {
    this.activeImage = i;
    this.changeOpacity(this.activeImage);
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

  startAnimation(state) {
    console.log(state);
    this.animation = 'start';
    if (!this.animationExitState) {
      this.animationExitState = state;
      if (this.animationExitState === 'slideOutLeft') {
        this.animationInRightState = 'slideInRight';
      } else {
        this.animationInLeftState = 'slideInLeft';
      }
    }
  }

  resetAnimationState() {
    if (this.animation === 'start') {
      this.animation = 'done';
      if (this.animationExitState === 'slideOutLeft') {
        this.activeImage = this.activeImage === this.images.length - 1 ? 0 : this.activeImage + 1;
      } else {
        this.activeImage = this.activeImage === 0 ? this.images.length - 1 : this.activeImage - 1;
      }
      this.changeOpacity(this.activeImage);
    }

    this.animationExitState = '';
    this.animationInRightState = '';
    this.animationInLeftState = '';
  }

  getOutClass() {
    return 'appear';
  }

  getInLeftClass(i: number) {
    if (this.activeImage === i + 1 && (this.animationInLeftState === 'slideInLeft')) {
      return 'appear';
    } else {
      return 'disappear';
    }
  }

  getInRightClass(i: number) {
    if (this.activeImage === i - 1 && (this.animationInRightState === 'slideInRight')) {
      return 'appear';
    } else {
      return 'disappear';
    }

  }

  onMouseOver(imgSrc: VRImage) {
    imgSrc.opacity = '1';
  }

  onMouseLeave(imgSrc: VRImage) {
    if (imgSrc.source !== this.images[this.activeImage].source) {
      imgSrc.opacity = '0.5';
    }
  }

  changeOpacity(i: number) {
    let k = 0;
    for (const img of this.images) {
      if ( k === i ) {
        img.opacity = '1';
      } else {
        img.opacity = '0.5';
      }
      k++;
    }
  }
}
