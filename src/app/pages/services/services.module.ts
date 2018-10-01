import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ServicesCardViewComponent } from '../../pages/services/card-view/services-card-view.component';
import { ServiceListViewComponent } from '../../pages/services/list-view/service-list-view.component';
import { ServicesOperationsComponent } from '../../pages/services/operations/services-operations.component';

import { ServicesService } from '../../services/services/services.service';
import { MockService } from '../../services/mock/mock.service';

import { ServicesRoutingModule } from '../../pages/services/services-routing.module';
import { SpinnerModule } from 'app/shared/spinner/spinner.module';
import { ServiceCreateComponent } from './service-create/service-create.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ServiceDetailViewComponent } from 'pages/services/service-detail-view/service-detail-view.component';
import { StackService } from 'services/stack/stack.service';
import { ServiceLogsComponent } from 'pages/services/service-logs/service-logs.component';
import { TaskService } from 'services/task/task.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModalModule,
    FormsModule,
    ServicesRoutingModule,
    NgbModule,
    SpinnerModule,
    NgxDatatableModule,
  ],
  declarations: [
    ServiceListViewComponent,
    ServicesCardViewComponent,
    ServicesOperationsComponent,
    ServiceCreateComponent,
    ServiceDetailViewComponent,
    ServiceLogsComponent
  ],
  providers: [ServicesService, MockService, StackService, TaskService],
})
export class ServicesModule {}
