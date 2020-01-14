import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {appRoutes, routerOptions} from './app.route';
import {AdminGuard} from './admin.guard';

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      routerOptions
    ),
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AdminGuard
  ]
})
export class RoutingModule {
}
