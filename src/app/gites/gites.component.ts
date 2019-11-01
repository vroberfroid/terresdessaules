import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gites',
  templateUrl: './gites.component.html',
  styleUrls: ['./gites.component.scss']
})
export class GitesComponent implements OnInit {

  imagesTB: any[];
  imagesTH: any[];

  constructor() { }

  ngOnInit() {
    this.imagesTB = [];
    this.imagesTB.push({source: 'assets/img/terredebas4.jpg'});
    this.imagesTB.push({source: 'assets/img/terredebas1.jpg'});
    this.imagesTB.push({source: 'assets/img/terredebas2.jpg'});
    this.imagesTB.push({source: 'assets/img/terredebas3.jpg'});
    this.imagesTB.push({source: 'assets/img/terredebas5.jpg'});
    this.imagesTB.push({source: 'assets/img/terredebas6.jpg'});

    this.imagesTH = [];
    this.imagesTH.push({source: 'assets/img/terredehaut1.jpg'});
    this.imagesTH.push({source: 'assets/img/terredehaut2.jpg'});
    this.imagesTH.push({source: 'assets/img/terredehaut3.jpg'});
  }

}
