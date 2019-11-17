import {ContactComponent} from '../components/contact/contact.component';
import {Routes} from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {GitesComponent} from '../components/gites/gites.component';
import {ActuComponent} from '../components/actu/actu.component';
import {CharteComponent} from '../components/charte/charte.component';
import {StagesComponent} from '../components/stages/stages.component';
import {NousComponent} from '../components/nous/nous.component';
import {MenuComponent} from '../components/menu/menu.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'actu',  component: ActuComponent },
  { path: 'charte',  component: CharteComponent },
  { path: 'stages',  component: StagesComponent },
  { path: 'gites',  component: GitesComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'nous',  component: NousComponent },
  { path: 'menu',  component: MenuComponent }
  ];
