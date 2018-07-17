import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from '_shared/home/home-routing.module';
import { HomeComponent } from '_shared/home/home.component';
import {
  ConfigurationService,
  ContainerService,
  MockService,
  TaskService,
} from 'app/_services';
import { ServicesService } from '_services/services/services.service';
import { GraphService } from '_services/graphs/graph.service';
import { GraphComponent } from '_shared/graph/graph.component';
import { GraphViewComponent } from '_shared/tasks/graph-view/graph-view.component';
import { AppComponent } from 'app/app.component';
import {
  NavbarComponent,
  ServiceListViewComponent,
  TaskListViewComponent,
  UserBarComponent,
} from 'app/_shared';
import { ServicesCardViewComponent } from '_shared/services/card-view/services-card-view.component';
import { ContainersComponent } from '_shared/containers/containers.component';
import { TaskCardViewComponent } from '_shared/tasks/card-view/task-card-view.component';
import { ServicesOperationsComponent } from '_shared/services/operations/services-operations.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '_guards/auth.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerComponent } from '_shared/spinner/spinner.component';
import { SharedSpinnerModule } from '_shared/spinner/shared-spinner/shared-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    NgbModule,
    SharedSpinnerModule
  ],
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
    ServicesOperationsComponent,
    ServicesCardViewComponent,
  ],
  providers: [
    ConfigurationService,
    ContainerService,
    TaskService,
    MockService,
    ServicesService,
    MockService,
    GraphService,
    AuthGuard,
  ],
  exports: [SpinnerComponent]
})
export class HomeModule {}
