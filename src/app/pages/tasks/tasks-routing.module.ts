import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskCardViewComponent } from '../../pages/tasks/card-view/task-card-view.component';
import { TaskListViewComponent } from '../../pages/tasks/list-view/task-list-view.component';
import { AuthGuard } from 'app/shared/guards/auth.guard';

import { PageNotFoundComponent } from 'app/pages/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'card',
        pathMatch: 'full',
        component: TaskCardViewComponent,
      },
      {
        path: 'list',
        pathMatch: 'full',
        component: TaskListViewComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
