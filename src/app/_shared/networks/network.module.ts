import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MockService, NetworkService} from '../../_services/index';
import {NetworkComponent} from './network.component';
import {NetworksRoutingModule} from './networks.routing-module';
import {NetworkslistComponent} from './networkslist/networkslist.component';
import {NetworkscardsComponent} from './networkscards/networkscards.component';

@NgModule({
  imports: [
    CommonModule,
    NetworksRoutingModule
  ],
  declarations: [NetworkComponent, NetworkslistComponent, NetworkscardsComponent],
  providers: [HttpClientModule, MockService, NetworkService],
  exports: [NetworkComponent]
})
export class NetworkModule { }
