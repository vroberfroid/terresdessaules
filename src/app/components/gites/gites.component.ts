import { Component,  OnInit} from '@angular/core';

@Component({
  selector: 'app-gites',
  templateUrl: './gites.component.html',
  styleUrls: ['./gites.component.scss']
})
export class GitesComponent implements OnInit {

  imagesTB: any[];
  imagesTH: any[];
  imagesTT: any[];

  constructor() { }

  ngOnInit() {
    this.imagesTB = [];
    for (let _i = 1; _i < 10; _i++) {
      this.imagesTB.push({source: 'assets/img/tb/tb' + _i + '.jpg'});
    }

    this.imagesTH = [];
    this.imagesTH.push({source: 'assets/img/terredehaut1.jpg'});
    this.imagesTH.push({source: 'assets/img/terredehaut2.jpg'});
    this.imagesTH.push({source: 'assets/img/terredehaut3.jpg'});

    this.imagesTT = [];
    this.imagesTT.push({source: 'assets/img/tente.jpg'});
    this.imagesTT.push({source: 'assets/img/tente2.jpg'});
  }



}
