import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'app/shared/guards/auth.guard';
import { HomeComponent } from 'app/pages/home/home.component';

const routes: Routes = [
  // {
  //   path: 'home',
  //   canActivate: [AuthGuard],
  //   component: HomeComponent,
  // }
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '**',
        redirectTo: '/',
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
