import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { VolumeService } from '../../services/volume/volume.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { WebhookCreateComponent } from './webhooks-create/webhook-create.component';

import { WebhookRoutingModule } from './webhook.routing-module';
import { SpinnerModule } from 'app/shared/spinner/spinner.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WebhookRoutingModule,
    SpinnerModule,
    NgbModule,
    NgxDatatableModule,
  ],
  declarations: [WebhookCreateComponent],
  providers: [VolumeService],
})
export class WebhookModule {}
