import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NetworkComponent } from './network.component';
import { AuthGuard } from 'app/shared/guards/auth.guard';

const routes: Routes = [
    {
        path: 'network',
        canActivate: [AuthGuard],
        component: NetworkComponent,
        pathMatch: 'full',
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NetworksRoutingModule { }
