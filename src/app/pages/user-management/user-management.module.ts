import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserEditComponent } from '../../pages/user-management/user-edit/user-edit.component';
import { UserListComponent } from '../../pages/user-management/user-list/user-list.component';
import { UserCreateComponent } from '../../pages/user-management/user-create/user-create.component';

import { UserService } from '../../services/user-management/user.service';
import { UserManagementRoutingModule } from '../../pages/user-management/user-management-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    NgxDatatableModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  declarations: [
    UserListComponent,
    UserCreateComponent,
    UserEditComponent
  ],
  providers: [
    UserService
  ],
})
export class UserManagementModule {}
