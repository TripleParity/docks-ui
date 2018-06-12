import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { VolumesModule } from '../_shared/volumes/volumes.module';
import {
  ConfigurationService,
  ContainerService,
  MockService,
  TaskService
} from '../_services';
import { ServicesService } from '../_services/services/services.service';
import { GraphService } from '../_services/graphs/graph.service';
import { GraphComponent } from '../_shared/graph/graph.component';
import { GraphViewComponent } from '../_shared/tasks/graph-view/graph-view.component';
import { AppComponent } from '../app.component';
import {
  NavbarComponent,
  ServiceListViewComponent,
  TaskListViewComponent,
  UserBarComponent
} from '../_shared';
import { ServicesCardViewComponent } from '../_shared/services/card-view/services-card-view.component';
import { ContainersComponent } from '../_shared/containers/containers.component';
import { TaskCardViewComponent } from '../_shared/tasks/card-view/task-card-view.component';
import { ServicesOperationsComponent } from '../_shared/services/operations/services-operations.component';
import { VolumeOperationsComponent } from '../_shared/volumes/volume-operations/volume-operations.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../_guards/auth.guard';

@NgModule({
  imports: [CommonModule, VolumesModule, HomeRoutingModule, FormsModule],
  declarations: [
    HomeComponent,
    NavbarComponent,
    AppComponent,
    ContainersComponent,
    TaskListViewComponent,
    GraphViewComponent,
    UserBarComponent,
    TaskCardViewComponent,
    ServiceListViewComponent,
    GraphComponent,
    VolumeOperationsComponent,
    ServicesOperationsComponent,
    ServicesCardViewComponent
  ],
  providers: [
    ConfigurationService,
    ContainerService,
    TaskService,
    MockService,
    ServicesService,
    MockService,
    GraphService,
    AuthGuard
  ]
})
export class HomeModule {}
