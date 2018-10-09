import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StacksRoutingModule } from './stacks-routing.module';
import { StacksViewComponent } from 'app/pages/stacks/stacks-view/stacks-view.component';
import { StacksCreateComponent } from 'pages/stacks/stacks-create/stacks-create.component';
import { StackService } from 'services/stack/stack.service';
import { StackEditComponent } from 'pages/stacks/stack-edit/stack-edit.component';
import { StackDetailViewComponent } from 'pages/stacks/stack-detail-view/stack-detail-view.component';

import { AceEditorModule } from 'ng2-ace-editor';


@NgModule({
  imports: [
    CommonModule,
    StacksRoutingModule,
    NgxDatatableModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    AceEditorModule,
  ],
  declarations: [
    StacksViewComponent,
    StacksCreateComponent,
    StackEditComponent,
    StackDetailViewComponent,
  ],
  providers: [StackService],
})
export class StacksModule {}
