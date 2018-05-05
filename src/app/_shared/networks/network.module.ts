import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MockService, NetworkService} from '../../_services/index';
import {NetworkComponent} from './network.component';
import {NetworksRoutingModule} from './networks.routing-module';
import {RouterModule, Routes} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    NetworksRoutingModule
  ],
  declarations: [NetworkComponent],
  providers: [HttpClientModule, MockService, NetworkService],
  exports: [NetworkComponent]
})
export class NetworkModule { }
