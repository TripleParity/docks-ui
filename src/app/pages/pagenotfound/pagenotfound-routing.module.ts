import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from '../../pages/pagenotfound/pagenotfound.component';
import { AuthGuard } from 'app/shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'pagenotfound',
    canActivate: [AuthGuard],
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagenotfoundRoutingModule { }
