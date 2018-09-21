import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListViewComponent } from '../../pages/tasks/list-view/task-list-view.component';
import { TaskDetailViewComponent } from 'pages/tasks/task-detail-view/task-detail-view.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        pathMatch: 'full',
        component: TaskListViewComponent,
      },
      {
        // path: ':stackName/edit',
        path: ':taskID',
        component: TaskDetailViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
