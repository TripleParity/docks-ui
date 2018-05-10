import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MockService, NetworkService, VolumeService} from '../../_services/index';
import {VolumesComponent} from './volumes.component';
import {VolumesRoutingModule} from './volumes.routing-module';
import {RouterModule, Routes} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    VolumesRoutingModule
  ],
  declarations: [VolumesComponent],
  providers: [HttpClientModule, MockService, VolumeService],
  exports: [VolumesComponent]
})
export class VolumesModule { }
