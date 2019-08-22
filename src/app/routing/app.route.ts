import {ContactComponent} from '../contact/contact.component';
import {Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {GitesComponent} from '../gites/gites.component';
import {ActuComponent} from '../actu/actu.component';
import {CharteComponent} from '../charte/charte.component';
import {StagesComponent} from '../stages/stages.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'actu',  component: ActuComponent },
  { path: 'charte',  component: CharteComponent },
  { path: 'stages',  component: StagesComponent },
  { path: 'gites',  component: GitesComponent },
  { path: 'contact',  component: ContactComponent }

  ];
