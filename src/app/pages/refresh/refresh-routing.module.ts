import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'app/shared/guards/auth.guard';
import { RefreshComponent } from 'app/pages/refresh/refresh.component';

const routes: Routes = [
  {
    path: 'refresh',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: RefreshComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefreshRoutingModule { }
