import {Component, OnInit} from '@angular/core';
import {RightService} from '../../../services/shared/right.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private rightService: RightService,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  onLogout() {
    this.rightService.logout();
    this.router.navigate(['admin']);
    this.openSnackBar('Vous avez été déconnecté avec succès.');
  }

  isLogged(): boolean {
    return this.rightService.isAuthenticated();
  }

  private openSnackBar(message: string): Observable<void> {
    const snackBarRef = this.snackBar.open(message, 'OK', {
      duration: 2000,
    });
    return snackBarRef.onAction();
  }
}
