import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';

import { TasksRoutingModule } from '../../pages/tasks/tasks-routing.module';

import { TaskListViewComponent } from '../../pages/tasks/list-view/task-list-view.component';

import { TaskService } from '../../services/task/task.service';
import { MockService } from '../../services/mock/mock.service';
import { SpinnerModule } from 'app/shared/spinner/spinner.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TaskDetailViewComponent } from 'pages/tasks/task-detail-view/task-detail-view.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ServicesService } from 'services/services/services.service';
import { NodeService } from 'services/node/node.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModalModule,
    TasksRoutingModule,
    SpinnerModule,
    NgbModule,
    NgxDatatableModule,
  ],
  declarations: [TaskListViewComponent, TaskDetailViewComponent],
  providers: [TaskService, MockService, ServicesService, NodeService],
})
export class TasksModule {}
