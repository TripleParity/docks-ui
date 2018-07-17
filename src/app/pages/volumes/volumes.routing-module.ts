import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VolumeListViewComponent } from '_shared/volumes/list-view/volume-list-view.component';
import { VolumeCardViewComponent } from '_shared/volumes/card-view/volume-card-view.component';
import { VolumesComponent } from '_shared/volumes/volumes.component';

const routes: Routes = [
  {
    path: '',
    component: VolumesComponent,
    children: [
      {
        path: 'list',
        component: VolumeListViewComponent,
      },
      {
        path: 'card',
        component: VolumeCardViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolumesRoutingModule {}
