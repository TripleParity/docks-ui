import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MockService, VolumeService} from '../../_services/index';
import {VolumeListViewComponent} from './list-view/volume-list-view.component';
import {VolumesRoutingModule} from './volumes.routing-module';
import {VolumeCardViewComponent} from './card-view/volume-card-view.component';
import { TokenStorage } from '../../_classes';
import {VolumesComponent} from './volumes.component';

@NgModule({
  imports: [
    CommonModule,
    VolumesRoutingModule,
  ],
  declarations: [VolumeListViewComponent, VolumeCardViewComponent, VolumesComponent],
  providers: [HttpClientModule, MockService, VolumeService, TokenStorage]
})
export class VolumesModule {

}
