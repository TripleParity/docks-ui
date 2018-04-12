import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ContainerComponent } from './container/container.component';
import { FormsModule } from '@angular/forms';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
// import { Component } form '@angular/core';

import { DockerService } from './_services/docker.service';
import { StackComponent } from './stack/stack.component';
import { AppComponent } from './app/app.component';
import { NavbarComponent } from './navbar/navbar.component';

// import { CustomMaterialModule } from "./material.module";
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    ContainerComponent,
    StackComponent,
    AppComponent,
    NavbarComponent,
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MaterialModule,
      MatMenuModule,
      MatIconModule,
      FormsModule,
  ],
  providers: [DockerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
