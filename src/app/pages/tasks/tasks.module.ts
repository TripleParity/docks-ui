import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';

import { TasksRoutingModule } from '../../pages/tasks/tasks-routing.module';

import { TaskCardViewComponent } from '../../pages/tasks/card-view/task-card-view.component';
import { TaskListViewComponent } from '../../pages/tasks/list-view/task-list-view.component';

import { TaskService } from '../../services/task/task.service';

import { SpinnerModule } from 'app/shared/spinner/spinner.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModalModule,
    TasksRoutingModule,
    SpinnerModule,
    NgbModule,
  ],
  declarations: [TaskCardViewComponent, TaskListViewComponent],
  providers: [TaskService],
})
export class TasksModule {}
