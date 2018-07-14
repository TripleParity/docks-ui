import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesCardViewComponent } from '../../pages/services/card-view/services-card-view.component';
import { ServiceListViewComponent } from '../../pages/services/list-view/service-list-view.component';
import { ServicesOperationsComponent } from '../../pages/services/operations/services-operations.component';
import { AuthGuard } from 'app/shared/guards/auth.guard';

import { PageNotFoundComponent } from 'app/pages/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: 'services',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'list',
        pathMatch: 'full',
        component: ServiceListViewComponent,
      },
      {
        path: 'card',
        pathMatch: 'full',
        component: ServicesCardViewComponent,
      },
      {
        path: 'operations',
        pathMatch: 'full',
        component: ServicesOperationsComponent,
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
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
