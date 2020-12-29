import {ContactComponent} from '../components/contact/contact.component';
import {ExtraOptions, Routes} from '@angular/router';
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
import {AdminNousComponent} from '../components/admin/admin_nous/admin_nous.component';
import {AdminCharteComponent} from '../components/admin/admin-charte/admin-charte.component';

export const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

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
      [ {path: 'admin_nous', component: AdminNousComponent},
        {path: 'admin_charte', component: AdminCharteComponent}]},
  { path: '**', redirectTo: 'not-found'}
  ];
