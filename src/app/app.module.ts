import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { DockerService } from './_services/docker.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MaterialModule,
      FormsModule,
  ],
  providers: [DockerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
