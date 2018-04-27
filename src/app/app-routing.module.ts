import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContainersComponent} from './_shared/containers/containers.component';
import {TaskListViewComponent} from './_shared/task-list-view/task-list-view.component';


const routes: Routes = [
    {path: 'containers', component: ContainersComponent},
    {path: 'listTasks', component: TaskListViewComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
