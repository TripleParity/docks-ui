import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContainersComponent} from './_shared/containers/containers.component';

import {ServiceListViewComponent} from './_shared';
import {PageNotFoundComponent} from './_shared/pagenotfound/pagenotfound.component';
import {GraphComponent} from './_shared/graph/graph.component';

import {TaskListViewComponent} from './_shared';
import {GraphViewComponent} from './_shared/tasks/graph-view/graph-view.component';



const routes: Routes = [
    {path: 'containers', component: ContainersComponent},
    {path: 'listServices', component: ServiceListViewComponent},
    {path: 'networks', loadChildren: 'app/_shared/networks/network.module#NetworkModule'},
    {path: 'graph', component: GraphComponent},
    {path: 'graphTasks', component: GraphViewComponent},
    {path: 'listTasks', component: TaskListViewComponent},
    {path: '**' , component: PageNotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes , {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
