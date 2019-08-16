import {ContactComponent} from '../contact/contact.component';
import {Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {GitesComponent} from '../gites/gites.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'gites',  component: GitesComponent },
  { path: 'contact',  component: ContactComponent }

  ];
