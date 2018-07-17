import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StacksRoutingModule } from './stacks-routing.module';
import { StacksViewComponent } from 'app/pages/stacks/stacks-view/stacks-view.component';
import { StacksCreateComponent } from 'pages/stacks/stacks-create/stacks-create.component';

@NgModule({
  imports: [
    CommonModule,
    StacksRoutingModule,
    NgxDatatableModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  declarations: [StacksViewComponent, StacksCreateComponent],
  providers: [],
})
export class StacksModule { }
