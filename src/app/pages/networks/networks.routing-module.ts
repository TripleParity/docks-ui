import { NetworkListComponent } from './network-list/network-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NetworkDetailViewComponent } from 'pages/networks/network-detail-view/network-detail-view.component';
import { NetworkCreateComponent } from 'pages/networks/network-create/network-create.component';

const routes: Routes = [
  {
    path: '',
    component: NetworkListComponent,
    pathMatch: 'full',
  },
  {
    path: 'create',
    component: NetworkCreateComponent,
  },
  {
    path: ':networkID',
    component: NetworkDetailViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetworksRoutingModule {}
