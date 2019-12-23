import {ContactComponent} from '../components/contact/contact.component';
import {Routes} from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {GitesComponent} from '../components/gites/gites.component';
import {LinksComponent} from '../components/links/links.component';
import {CharteComponent} from '../components/charte/charte.component';
import {StagesComponent} from '../components/stages/stages.component';
import {NousComponent} from '../components/nous/nous.component';
import {MenuComponent} from '../components/menu/menu.component';
import {NotFoundComponent} from '../components/not-found/not-found.component';
import {AdminComponent} from '../components/admin/admin/admin.component';
import {AdminGuard} from './admin.guard';
import {EditorComponent} from '../components/admin/editor/editor.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'links',  component: LinksComponent },
  { path: 'charte',  component: CharteComponent },
  { path: 'stages',  component: StagesComponent },
  { path: 'gites',  component: GitesComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'nous',  component: NousComponent },
  { path: 'menu',  component: MenuComponent },
  { path: 'not-found', component: NotFoundComponent,
    data: {message: 'Page not found !'}},
  { path: 'admin',
    canActivateChild: [AdminGuard],
    component: AdminComponent,
    children:
      [ {path: 'edit', component: EditorComponent} ]},
  { path: '**', redirectTo: 'not-found'}
  ];
