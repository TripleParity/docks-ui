import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { NetworkService } from '../../services/network/network.service';
import { NetworksRoutingModule } from './networks.routing-module';
import { NetworkListComponent } from './network-list/network-list.component';
import { NetworkDetailViewComponent } from 'pages/networks/network-detail-view/network-detail-view.component';
import { NetworkCreateComponent } from 'pages/networks/network-create/network-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, NetworksRoutingModule, NgxDatatableModule, FormsModule, ReactiveFormsModule, NgbModule],
  declarations: [
    NetworkListComponent,
    NetworkDetailViewComponent,
    NetworkCreateComponent,
  ],
  providers: [HttpClientModule, NetworkService],
})
export class NetworkModule {}
