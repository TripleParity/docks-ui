import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'app/shared/guards/auth.guard';
import { ContainersComponent } from 'app/pages/containers/containers.component';

const routes: Routes = [
  {
    path: 'containers',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: ContainersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainersRoutingModule { }
