import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StacksViewComponent } from 'app/pages/stacks/stacks-view/stacks-view.component';
import { StacksCreateComponent } from 'app/pages/stacks/stacks-create/stacks-create.component';
import { StackEditComponent } from 'pages/stacks/stack-edit/stack-edit.component';
import { StackDetailViewComponent } from 'pages/stacks/stack-detail-view/stack-detail-view.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: StacksViewComponent,
  },
  {
    path: 'create',
    pathMatch: 'full',
    component: StacksCreateComponent,
  },
  {
    path: ':stackName/edit',
    component: StackEditComponent,
  },
  {
    path: ':stackName',
    component: StackDetailViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StacksRoutingModule {}
