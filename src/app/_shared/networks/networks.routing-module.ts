import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NetworkComponent } from './network.component';
import {NetworkscardsComponent} from './networkscards/networkscards.component';
import {NetworkslistComponent} from './networkslist/networkslist.component';

const routes: Routes = [
    {
        path: 'cards',
        component: NetworkscardsComponent
    },
    {
        path: 'list',
        component: NetworkslistComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NetworksRoutingModule { }
