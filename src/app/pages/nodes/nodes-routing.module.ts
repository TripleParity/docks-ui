import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NodeViewComponent } from 'app/pages/nodes/node-view/node-view.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NodeViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NodesRoutingModule {}
