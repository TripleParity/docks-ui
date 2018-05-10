import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VolumeListViewComponent } from './list-view/volume-list-view.component';
import {VolumeCardViewComponent} from './card-view/volume-card-view.component';

const routes: Routes = [
    {
        path: '',
        component: VolumeListViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VolumesRoutingModule { }
