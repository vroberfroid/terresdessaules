import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

import { RightService} from '../services/shared/right.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor( private readonly rightService: RightService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

    if ( route.routeConfig.path === 'login') {
      return true;
    } else {
      return this.rightService.isAuthenticated();
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(route, state);
  }
}
