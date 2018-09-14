import { NetworkListComponent } from './network-list/network-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NetworkDetailViewComponent } from 'pages/networks/network-detail-view/network-detail-view.component';

const routes: Routes = [
  {
    path: '',
    component: NetworkListComponent,
    pathMatch: 'full',
  },
  {
    path: 'detail',
    component: NetworkDetailViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetworksRoutingModule {}
