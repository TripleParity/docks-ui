import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { VolumeCardViewComponent } from './card-view/volume-card-view.component';
import { VolumeListViewComponent } from './list-view/volume-list-view.component';
import { VolumeOperationsComponent } from '../volumes/volume-operations/volume-operations.component';

import { VolumeService } from '../../services/volume/volume.service';

import { VolumesRoutingModule } from './volumes.routing-module';
import { TokenStorage } from '../../classes/tokenstorage/tokenstorage';
import { SpinnerModule } from 'app/shared/spinner/spinner.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, VolumesRoutingModule, SpinnerModule, NgbModule],
  declarations: [
    VolumeListViewComponent,
    VolumeCardViewComponent,
    VolumeOperationsComponent,
  ],
  providers: [HttpClientModule, VolumeService, TokenStorage],
})
export class VolumesModule {}
