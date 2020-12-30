import {AfterViewChecked, ElementRef, OnInit, ViewChild} from '@angular/core';

export class VariableBackgroundComponent implements OnInit, AfterViewChecked {
  @ViewChild('content', {static: false}) elementView: ElementRef;

  private styleHeight = '1000px';

  constructor() {}

  ngAfterViewChecked(): void {
    setTimeout(() => {
        if (this.elementView) {
          this.styleHeight = this.elementView.nativeElement.offsetHeight + 200 + 'px';
        }
      }
    );
  }

  ngOnInit(): void {
    if (this.elementView) {
      this.styleHeight = this.elementView.nativeElement.offsetHeight + 200 + 'px';
    }
  }

  getStyleHeight(): string {
    return this.styleHeight;
  }
}
