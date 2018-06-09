import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContainersComponent} from './_shared/containers/containers.component';

import {ServiceListViewComponent} from './_shared';
import {PageNotFoundComponent} from './_shared/pagenotfound/pagenotfound.component';
import {GraphComponent} from './_shared/graph/graph.component';

import {TaskListViewComponent} from './_shared';
import {GraphViewComponent} from './_shared/tasks/graph-view/graph-view.component';
import {VolumeListViewComponent} from './_shared/volumes/list-view/volume-list-view.component';
import {ServicesOperationsComponent} from './_shared/services/operations/services-operations.component';
import {TaskCardViewComponent} from './_shared/tasks/card-view/task-card-view.component';
import {ServicesCardViewComponent} from './_shared/services/card-view/services-card-view.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    //{path: 'home', component: HomeComponent},
    {path: '**' , component: PageNotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes , {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
