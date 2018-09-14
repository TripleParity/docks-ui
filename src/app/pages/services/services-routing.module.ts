import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesCardViewComponent } from '../../pages/services/card-view/services-card-view.component';
import { ServiceListViewComponent } from '../../pages/services/list-view/service-list-view.component';
import { ServicesOperationsComponent } from '../../pages/services/operations/services-operations.component';
import { ServiceCreateComponent } from '../../pages/services/service-create/service-create.component';

const routes: Routes = [
  {
    path: '',
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
        path: 'operations/:id',
        component: ServicesOperationsComponent,
      },
      {
        path: 'create',
        pathMatch: 'full',
        component: ServiceCreateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
