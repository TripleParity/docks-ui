import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MockService, VolumeService} from 'app/_services';
import {VolumeListViewComponent} from '_shared/volumes/list-view/volume-list-view.component';
import {VolumesRoutingModule} from '_shared/volumes/volumes.routing-module';
import {VolumeCardViewComponent} from '_shared/volumes/card-view/volume-card-view.component';
import { TokenStorage } from 'app/_classes';
import {VolumesComponent} from '_shared/volumes/volumes.component';
import { VolumeOperationsComponent } from '_shared/volumes/volume-operations/volume-operations.component';
import { SpinnerComponent } from '_shared/spinner/spinner.component';
import { SharedSpinnerModule } from '_shared/spinner/shared-spinner/shared-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    VolumesRoutingModule,
    SharedSpinnerModule
  ],
  declarations: [
    VolumesComponent,
    VolumeOperationsComponent,
    VolumeListViewComponent,
    VolumeCardViewComponent,
  ],
  providers: [HttpClientModule, MockService, VolumeService, TokenStorage],
})
export class VolumesModule {

}
