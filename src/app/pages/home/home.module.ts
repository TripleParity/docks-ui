import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '../../pages/home/home.component';
import { HomeRoutingModule } from '../../pages/home/home-routing.module';

import { GraphService } from '../../services/graphs/graph.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    GraphService
  ]
})
export class HomeModule { }