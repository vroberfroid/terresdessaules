import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {ImageService} from '../../services/shared/image.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit, AfterViewChecked {

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    if (!this.imageService.isImageSelected) {
      this.imageService.setImageSelected();
      location.reload();
    }
  }

}
