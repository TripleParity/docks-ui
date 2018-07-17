import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StacksViewComponent } from 'app/pages/stacks/stacks-view/stacks-view.component';
import { StacksCreateComponent } from 'app/pages/stacks/stacks-create/stacks-create.component';


const routes: Routes = [
  {
    path: '',
    component: StacksViewComponent,
  },
  {
    path: 'create',
    component: StacksCreateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class StacksRoutingModule {}
