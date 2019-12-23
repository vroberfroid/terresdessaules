import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-charte',
  templateUrl: './charte.component.html',
  styleUrls: ['./charte.component.scss']
})
export class CharteComponent implements OnInit {

  @ViewChild('content', {static: false}) elementView: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log('on init:' + this.elementView.nativeElement.offsetHeight);
  }


  getStyleHeight(): string {
    return this.elementView.nativeElement.offsetHeight + 200 + 'px';
  }
}
