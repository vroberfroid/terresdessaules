import { Component, OnInit } from '@angular/core';
import {RightService} from '../../../services/shared/right.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private rightService: RightService, private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    this.rightService.logout();
    this.router.navigate(['admin']);
  }

  isLogged(): boolean {
    return this.rightService.isAuthenticated();
  }
}
