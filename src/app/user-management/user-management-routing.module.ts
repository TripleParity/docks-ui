import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UserListComponent } from "app/user-management/user-list/user-list.component";
import { UserCreateComponent } from "app/user-management/user-create/user-create.component";
import { UserEditComponent } from "app/user-management/user-edit/user-edit.component";

const routes: Routes = [
  {
    path: "",
    component: UserListComponent
  },
  {
    path: "create",
    component: UserCreateComponent
  },
  {
    path: ":username/edit",
    component: UserEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule {}
