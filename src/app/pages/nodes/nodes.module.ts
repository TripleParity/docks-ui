import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NodesRoutingModule } from './nodes-routing.module';
import { NodeService } from 'services/node/node.service';
import { NodeViewComponent } from 'app/pages/nodes/node-view/node-view.component';

@NgModule({
  imports: [
    CommonModule,
    NodesRoutingModule,
    NgxDatatableModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  declarations: [
    NodeViewComponent,
  ],
  providers: [NodeService],
})
export class NodesModule {}
