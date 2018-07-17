import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { ServicesCardViewComponent } from '_shared/services/card-view/services-card-view.component';
import { ServiceListViewComponent, TaskListViewComponent } from '_shared/index';
import { GraphComponent } from '_shared/graph/graph.component';
import { ContainersComponent } from '_shared/containers/containers.component';
import { GraphViewComponent } from '_shared/tasks/graph-view/graph-view.component';
import { TaskCardViewComponent } from '_shared/tasks/card-view/task-card-view.component';
import { ServicesOperationsComponent } from '_shared/services/operations/services-operations.component';

import { AuthGuard } from '_guards/auth.guard';

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
        component: ServicesOperationsComponent,
      },
      { path: 'cardServices', component: ServicesCardViewComponent },
      {
        path: 'volumes',
        loadChildren: 'app/_shared/volumes/volumes.module#VolumesModule',
      },
      {
        path: 'networks',
        loadChildren: 'app/_shared/networks/network.module#NetworkModule',
      },
      {
        path: 'users',
        loadChildren:
          'app/user-management/user-management.module#UserManagementModule',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
