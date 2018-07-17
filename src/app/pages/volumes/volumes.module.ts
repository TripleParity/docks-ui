import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { VolumeCardViewComponent } from './card-view/volume-card-view.component';
import { VolumeListViewComponent } from './list-view/volume-list-view.component';
import { VolumeOperationsComponent } from '../volumes/volume-operations/volume-operations.component';

import { VolumeService } from '../../services/volume/volume.service';
import { MockService } from '../../services/mock/mock.service';

import { VolumesRoutingModule } from './volumes.routing-module';
import { TokenStorage } from '../../classes/tokenstorage/tokenstorage';

@NgModule({
  imports: [CommonModule, VolumesRoutingModule],
  declarations: [
    VolumeListViewComponent,
    VolumeCardViewComponent,
    VolumeOperationsComponent,
  ],
  providers: [HttpClientModule, MockService, VolumeService, TokenStorage],
})
export class VolumesModule {}
