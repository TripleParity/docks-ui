import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home.component';

import {ServicesCardViewComponent} from '../_shared/services/card-view/services-card-view.component';
import {NavbarComponent, ServiceListViewComponent, TaskListViewComponent, UserBarComponent} from '../_shared';
import {GraphComponent} from '../_shared/graph/graph.component';
import {ContainersComponent} from '../_shared/containers/containers.component';
import {GraphViewComponent} from '../_shared/tasks/graph-view/graph-view.component';
import {TaskCardViewComponent} from '../_shared/tasks/card-view/task-card-view.component';
import {ServicesOperationsComponent} from '../_shared/services/operations/services-operations.component';
import {PageNotFoundComponent} from '../_shared/pagenotfound/pagenotfound.component';
import {LoginComponent} from '../login/login.component';
import {AppComponent} from '../app.component';
import {VolumeOperationsComponent} from '../_shared/volumes/volume-operations/volume-operations.component';

import {VolumesComponent} from '../_shared/volumes/volumes.component';
import {VolumeListViewComponent} from '../_shared/volumes/list-view/volume-list-view.component';
import {VolumeCardViewComponent} from '../_shared/volumes/card-view/volume-card-view.component';

const routes: Routes = [
    {path: '', component: HomeComponent,
    children: [
        {path: 'containers', component: ContainersComponent},
        {path: 'listServices', component: ServiceListViewComponent},
        //  {path: 'networks', component: VolumesComponent},
        {path: 'graph', component: GraphComponent},
        {path: 'graphTasks', component: GraphViewComponent},
        {path: 'listTasks', component: TaskListViewComponent},
        {path: 'cardTasks', component: TaskCardViewComponent},
        {path: 'operationsServices/:id', component: ServicesOperationsComponent},
        {path: 'cardServices', component: ServicesCardViewComponent},
        {path: 'volumes', component: VolumesComponent, children: [ // It seems routes have to be flatted somewhere. Cannot just import and have children
                {
                    path: 'list',
                    component: VolumeListViewComponent
                },
                {
                    path: 'card',
                    component: VolumeCardViewComponent
                },
            ]}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
