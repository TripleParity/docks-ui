import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MockService } from '../../services/mock/mock.service';
import { NetworkService } from '../../services/network/network.service';
import { NetworkComponent } from './network.component';
import { NetworksRoutingModule } from './networks.routing-module';

@NgModule({
  imports: [CommonModule, NetworksRoutingModule],
  declarations: [NetworkComponent],
  providers: [HttpClientModule, MockService, NetworkService],
  // exports: [NetworkComponent]
})
export class NetworkModule {}
