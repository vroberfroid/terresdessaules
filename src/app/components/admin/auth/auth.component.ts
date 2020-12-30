import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {RightService} from '../../../services/shared/right.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  error: string = null;

  constructor(private rightService: RightService) { }

  ngOnInit() {
  }

  onSubmit(authForm: NgForm) {
    if ( !authForm.valid) {
      return;
    }
    const email = authForm.value.email;
    const password = authForm.value.password;

    this.rightService.login(email, password).subscribe(
      resData => {
        console.log(resData);
        this.error = null;
      },
      error => {
        this.error = error;
        console.log(error);
      }
    );

    authForm.reset();
  }

  isLogged(): boolean {
    return this.rightService.isAuthenticated();
  }
}
