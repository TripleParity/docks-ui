import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContainersComponent} from './_shared/containers/containers.component';
import {TaskListViewComponent} from './_shared';
import {GraphViewComponent} from './_shared/tasks/graph-view/graph-view.component';


const routes: Routes = [
    {path: 'containers', component: ContainersComponent},
    {path: 'graphTasks', component: GraphViewComponent},
    {path: 'listTasks', component: TaskListViewComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
