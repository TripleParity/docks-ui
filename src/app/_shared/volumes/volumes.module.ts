import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MockService, VolumeService} from '../../_services/index';
import {VolumeListViewComponent} from './list-view/volume-list-view.component';
import {VolumesRoutingModule} from './volumes.routing-module';
import {VolumeCardViewComponent} from './card-view/volume-card-view.component';
import { TokenStorage } from '../../_classes';
import {VolumesComponent} from './volumes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VolumeOperationsComponent } from '_shared/volumes/volume-operations/volume-operations.component';

@NgModule({
  imports: [
    CommonModule,
    VolumesRoutingModule,
    NgbModule
  ],
  declarations: [VolumeListViewComponent, VolumeCardViewComponent, VolumesComponent, VolumeOperationsComponent],
  providers: [HttpClientModule, MockService, VolumeService, TokenStorage]
})
export class VolumesModule {

}
