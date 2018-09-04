import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { VolumeService } from '../../services/volume/volume.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { VolumesCreateComponent } from './volumes-create/volumes-create.component';
import { VolumesViewComponent } from './volumes-view/volumes-view.component';


import { VolumesRoutingModule } from './volumes.routing-module';
import { SpinnerModule } from 'app/shared/spinner/spinner.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, VolumesRoutingModule,
  SpinnerModule, NgbModule, NgxDatatableModule],
  declarations: [VolumesCreateComponent, VolumesViewComponent],
  providers: [VolumeService],
})
export class VolumesModule {}
