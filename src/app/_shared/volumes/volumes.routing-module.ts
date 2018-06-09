import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VolumeListViewComponent } from './list-view/volume-list-view.component';
import {VolumeCardViewComponent} from './card-view/volume-card-view.component';
import {VolumeOperationsComponent} from './volume-operations/volume-operations.component';
import {VolumesComponent} from './volumes.component';

const routes: Routes = [
    // {path: '',
    //     component: VolumesComponent,
    // children: [
    //     {
    //         path: 'list',
    //         component: VolumeListViewComponent
    //     },
    //     {
    //         path: 'card',
    //         component: VolumeCardViewComponent
    //     },
    //     ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VolumesRoutingModule { }
