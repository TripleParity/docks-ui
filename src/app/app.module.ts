import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ContainerComponent } from './container/container.component';
import { FormsModule } from '@angular/forms';

import { DockerService } from './_services/docker.service';
import { StackComponent } from './stack/stack.component';
import { AppComponent } from './app/app.component';

@NgModule({
  declarations: [
    ContainerComponent,
    StackComponent,
    AppComponent,
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MaterialModule,
  ],
  providers: [DockerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
