import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MockService, VolumeService} from '../../_services/index';
import {VolumeListViewComponent} from './list-view/volume-list-view.component';
import {VolumesRoutingModule} from './volumes.routing-module';
import {RouterModule, Routes} from '@angular/router';
import {VolumeCardViewComponent} from './card-view/volume-card-view.component';
import { StorageService } from '../../_services/storage/storage.service';

@NgModule({
  imports: [
    CommonModule,
    VolumesRoutingModule
  ],
  declarations: [VolumeListViewComponent, VolumeCardViewComponent],
  providers: [HttpClientModule, MockService, VolumeService, StorageService],
  exports: [VolumeListViewComponent, VolumeCardViewComponent]
})
export class VolumesModule { }
