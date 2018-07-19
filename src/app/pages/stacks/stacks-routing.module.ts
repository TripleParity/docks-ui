import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StacksViewComponent } from 'app/pages/stacks/stacks-view/stacks-view.component';
import { StacksCreateComponent } from 'app/pages/stacks/stacks-create/stacks-create.component';
import { StackEditComponent } from 'pages/stacks/stack-edit/stack-edit.component';


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
    path: 'stackName/edit',
    component: StackEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class StacksRoutingModule {}
