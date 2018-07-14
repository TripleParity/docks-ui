import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'app/shared/guards/auth.guard';
import { LoginComponent } from 'app/pages/login/login.component';

const routes: Routes = [
  // {
  //   path: 'login',
  //   pathMatch: 'full',
  //   canActivate: [AuthGuard],
  //   component: LoginComponent,
  // }
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
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
export class LoginRoutingModule { }
