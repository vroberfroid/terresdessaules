import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ImageService {

  private imageSelected = new BehaviorSubject(false);

  constructor() { }

  setImageSelected() {
    this.imageSelected.next(true);
  }

  clearImageSelected() {
    this.imageSelected.next(false);
  }

  isImageSelected() {
    return this.imageSelected.asObservable();
  }

}
