import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-nous',
  templateUrl: './admin_nous.component.html',
  styleUrls: ['./admin_nous.component.scss']
})
export class AdminNousComponent implements OnInit {
  marie = 'marie';
  cedric = 'cedric';
  kids = 'kids';
  path = 'nous';
  constructor() { }

  ngOnInit() {
  }

}
