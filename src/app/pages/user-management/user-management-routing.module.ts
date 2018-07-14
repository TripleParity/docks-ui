import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from '../user-management/user-list/user-list.component';
import { UserCreateComponent } from '../user-management/user-create/user-create.component';
import { UserEditComponent } from '../user-management/user-edit/user-edit.component';
import { AuthGuard } from 'app/shared/guards/auth.guard';
import { PageNotFoundComponent } from 'app/pages/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: 'users',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: UserListComponent,
      },
      {
        path: 'create',
        pathMatch: 'full',
        component: UserCreateComponent,
      },
      {
        path: ':username/edit',
        component: UserEditComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserManagementRoutingModule {}
