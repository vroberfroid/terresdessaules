import { Component } from '@angular/core';
import {ImageService} from './services/shared/image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'terresdessaules';
  constructor(private imageService: ImageService) {}

  isImageSelected(): boolean {
    let result: boolean;
    this.imageService.isImageSelected().subscribe( t => result = t);
    return result;
  }
}
