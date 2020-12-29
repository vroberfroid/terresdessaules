import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-charte',
  templateUrl: './charte.component.html',
  styleUrls: ['./charte.component.scss']
})
export class CharteComponent implements OnInit, AfterViewChecked {

  @ViewChild('content', {static: false}) elementView: ElementRef;

  private styleHeight = '1000px';

  constructor() { }

  ngOnInit() {
    if ( this.elementView ) {
      this.styleHeight = this.elementView.nativeElement.offsetHeight + 200 + 'px';
    }
  }


  getStyleHeight(): string {
    return this.styleHeight;
  }

  onSwipe(event: any) {
    console.log(event);
  }


  ngAfterViewChecked(): void {
     setTimeout(() => {
      if (this.elementView) {
        this.styleHeight = this.elementView.nativeElement.offsetHeight + 200 + 'px';
      }
    }
   );
   }
}
