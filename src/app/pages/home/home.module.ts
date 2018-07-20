import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '../../pages/home/home.component';
import { HomeRoutingModule } from '../../pages/home/home-routing.module';

import { GraphService } from '../../services/graphs/graph.service';

import { NetworkService } from '../../services/network/network.service';
import { VolumeService } from '../../services/volume/volume.service';
import { TaskService } from '../../services/task/task.service';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomeComponent],
  providers: [
    NetworkService,
    VolumeService,
    TaskService,
    GraphService,
  ],
})
export class HomeModule {}
