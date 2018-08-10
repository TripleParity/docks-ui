import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { VolumeService } from '../../services/volume/volume.service';
import { MockService } from '../../services/mock/mock.service';

import { VolumesCreateComponent } from './volumes-create/volumes-create.component';
import { VolumesViewComponent } from './volumes-view/volumes-view.component';


import { VolumesRoutingModule } from './volumes.routing-module';
import { TokenStorage } from '../../classes/tokenstorage/tokenstorage';
import { SpinnerModule } from 'app/shared/spinner/spinner.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, VolumesRoutingModule, SpinnerModule, NgbModule],
  declarations: [VolumesCreateComponent, VolumesViewComponent],
  providers: [HttpClientModule, MockService, VolumeService, TokenStorage],
})
export class VolumesModule {}
