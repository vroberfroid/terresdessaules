import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {RoutingModule} from './routing/routine.module';
import { HomeComponent } from './components/home/home.component';
import { GitesComponent } from './components/gites/gites.component';
import { LinksComponent } from './components/links/links.component';
import { CharteComponent } from './components/charte/charte.component';
import { StagesComponent } from './components/stages/stages.component';
import { NousComponent } from './components/nous/nous.component';
import {GalleriaModule} from 'primeng/galleria';
import { GalleriaComponent } from './components/tools/galleria/galleria.component';
import {FormsModule} from '@angular/forms';
import {ImageService} from './services/shared/image.service';
import { MenuComponent } from './components/menu/menu.component';
import { ChangeOpacityOnmouseoverDirective } from './change-opacity-onmouseover.directive';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import {RightService} from './services/shared/right.service';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    ContactComponent,
    NavigationComponent,
    HomeComponent,
    GitesComponent,
    LinksComponent,
    CharteComponent,
    StagesComponent,
    NousComponent,
    GalleriaComponent,
    MenuComponent,
    ChangeOpacityOnmouseoverDirective,
    NotFoundComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    GalleriaModule,
    FormsModule
  ],
  providers: [ ImageService, RightService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
