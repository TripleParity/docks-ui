import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from '../_shared';

import { HttpClientModule } from '@angular/common/http';
import { ContainersComponent } from '../_components/containers/containers.component';
import {ContainerService} from '../_services';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ContainerService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
