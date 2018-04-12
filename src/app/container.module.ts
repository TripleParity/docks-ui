import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ContainerComponent } from './container.component';
import { FormsModule } from '@angular/forms';

import { DockerService } from './_services/docker.service';

@NgModule({
  declarations: [
    ContainerComponent,
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MaterialModule,
  ],
  providers: [DockerService],
  bootstrap: [ContainerComponent]
})
export class AppModule { }
