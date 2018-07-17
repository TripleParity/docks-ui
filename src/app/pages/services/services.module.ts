import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { ServicesCardViewComponent } from '../../pages/services/card-view/services-card-view.component';
import { ServiceListViewComponent } from '../../pages/services/list-view/service-list-view.component';
import { ServicesOperationsComponent } from '../../pages/services/operations/services-operations.component';

import { ServicesService } from '../../services/services/services.service';
import { MockService } from '../../services/mock/mock.service';

import { ServicesRoutingModule } from '../../pages/services/services-routing.module';

@NgModule({
  imports: [CommonModule, NgbModalModule, FormsModule, ServicesRoutingModule],
  declarations: [
    ServiceListViewComponent,
    ServicesCardViewComponent,
    ServicesOperationsComponent,
  ],
  providers: [ServicesService, MockService],
})
export class ServicesModule {}
