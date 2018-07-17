import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefreshComponent } from 'app/pages/refresh/refresh.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RefreshComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefreshRoutingModule {}
