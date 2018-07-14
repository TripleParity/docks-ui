import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolumeListViewComponent } from './list-view/volume-list-view.component';
import { VolumeCardViewComponent } from './card-view/volume-card-view.component';
import { VolumeOperationsComponent } from '../volumes/volume-operations/volume-operations.component';
import { AuthGuard } from 'app/shared/guards/auth.guard';

import { PageNotFoundComponent } from 'app/pages/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: 'volumes',
    canActivate: [AuthGuard],
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
      },
      {
        path: '**',
        component: PageNotFoundComponent,
        canActivate: [AuthGuard],
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolumesRoutingModule {}
