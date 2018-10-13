import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VolumesViewComponent } from 'pages/volumes/volumes-view/volumes-view.component';
import { VolumesCreateComponent } from 'pages/volumes/volumes-create/volumes-create.component';
import { VolumeDetailViewComponent } from 'pages/volumes/volume-detail-view/volume-detail-view.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: VolumesViewComponent,
  },
  {
    path: 'create',
    pathMatch: 'full',
    component: VolumesCreateComponent,
  },
  {
    path: ':volumeID',
    component: VolumeDetailViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolumesRoutingModule {}
