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
import {AdminNousComponent} from '../components/admin/admin_nous/admin_nous.component';
import {AdminCharteComponent} from '../components/admin/admin-charte/admin-charte.component';
import {AuthComponent} from '../components/admin/auth/auth.component';
import {AdminGitesComponent} from '../components/admin/admin-gites/admin-gites.component';
import {AdminLinksComponent} from '../components/admin/admin-links/admin-links.component';
import {AdminActivitesComponent} from '../components/admin/admin-activites/admin-activites.component';
import {AdminImagesComponent} from '../components/admin/admin-images/admin-images.component';
import {ImagesComponent} from '../components/images/images.component';
import {AdminHomeComponent} from '../components/admin/admin-home/admin-home.component';

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
  { path: 'images',  component: ImagesComponent },
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
        {path: 'admin_charte', component: AdminCharteComponent},
        {path: 'login', component: AuthComponent},
        {path: 'admin_gites', component: AdminGitesComponent},
        {path: 'admin_links', component: AdminLinksComponent},
        {path: 'admin_activites', component: AdminActivitesComponent},
        {path: 'admin_images', component: AdminImagesComponent},
        {path: 'admin_home', component: AdminHomeComponent}
        ]}
  ];
