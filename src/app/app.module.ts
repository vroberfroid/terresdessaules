import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationComponent } from './navigation/navigation.component';
import {RoutingModule} from './routing/routine.module';
import { HomeComponent } from './home/home.component';
import { GitesComponent } from './gites/gites.component';
import { ActuComponent } from './actu/actu.component';
import { CharteComponent } from './charte/charte.component';
import { StagesComponent } from './stages/stages.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    ContactComponent,
    NavigationComponent,
    HomeComponent,
    GitesComponent,
    ActuComponent,
    CharteComponent,
    StagesComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
