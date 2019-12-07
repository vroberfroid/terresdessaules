import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.route';
import {AdminGuard} from './admin.guard';

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false
      }
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
