import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { ServicesCardViewComponent } from '../_shared/services/card-view/services-card-view.component';
import { ServiceListViewComponent, TaskListViewComponent } from '../_shared';
import { GraphComponent } from '../_shared/graph/graph.component';
import { ContainersComponent } from '../_shared/containers/containers.component';
import { GraphViewComponent } from '../_shared/tasks/graph-view/graph-view.component';
import { TaskCardViewComponent } from '../_shared/tasks/card-view/task-card-view.component';
import { ServicesOperationsComponent } from '../_shared/services/operations/services-operations.component';

import { VolumesComponent } from '../_shared/volumes/volumes.component';
import { VolumeListViewComponent } from '../_shared/volumes/list-view/volume-list-view.component';
import { VolumeCardViewComponent } from '../_shared/volumes/card-view/volume-card-view.component';

import { AuthGuard } from '../_guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'containers', component: ContainersComponent },
      { path: 'listServices', component: ServiceListViewComponent },
      { path: 'graph', component: GraphComponent },
      { path: 'graphTasks', component: GraphViewComponent },
      { path: 'listTasks', component: TaskListViewComponent },
      { path: 'cardTasks', component: TaskCardViewComponent },
      {
        path: 'operationsServices/:id',
        component: ServicesOperationsComponent
      },
      { path: 'cardServices', component: ServicesCardViewComponent },
      {
        path: 'volumes',
        component: VolumesComponent,
        children: [
          {
            path: 'list',
            component: VolumeListViewComponent
          },
          {
            path: 'card',
            component: VolumeCardViewComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
