import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from '../user-management/shared/user.service';

@NgModule({
  imports: [CommonModule, UserManagementRoutingModule, NgxDatatableModule],
  declarations: [UserListComponent],
  providers: [UserService],
})
export class UserManagementModule {}
