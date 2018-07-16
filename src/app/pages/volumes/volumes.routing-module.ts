import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolumeListViewComponent } from './list-view/volume-list-view.component';
import { VolumeCardViewComponent } from './card-view/volume-card-view.component';
import { VolumeOperationsComponent } from '../volumes/volume-operations/volume-operations.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        pathMatch: 'full',
        component: VolumeListViewComponent,
      },
      {
        path: 'card',
        pathMatch: 'full',
        component: VolumeCardViewComponent,
      },
      {
        path: 'operations',
        pathMatch: 'full',
        component: VolumeOperationsComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolumesRoutingModule {}
