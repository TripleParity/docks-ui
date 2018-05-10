import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MockService, VolumeService} from '../../_services/index';
import {VolumeListViewComponent} from './list-view/volume-list-view.component';
import {VolumesRoutingModule} from './volumes.routing-module';
import {RouterModule, Routes} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    VolumesRoutingModule
  ],
  declarations: [VolumeListViewComponent],
  providers: [HttpClientModule, MockService, VolumeService],
  exports: [VolumeListViewComponent]
})
export class VolumesModule { }
