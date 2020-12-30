import {Component, OnInit} from '@angular/core';
import {ImageService} from './services/shared/image.service';
import {RightService} from './services/shared/right.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'terresdessaules';
  constructor(private imageService: ImageService, private rightService: RightService) {}

  ngOnInit() {
    this.rightService.autoLogin();
  }

  isImageSelected(): boolean {
    let result: boolean;
    this.imageService.isImageSelected().subscribe( t => result = t);
    return result;
  }
}
