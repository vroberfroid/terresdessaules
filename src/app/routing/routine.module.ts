import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.route';

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
  ]
})
export class RoutingModule {
}
