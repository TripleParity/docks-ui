import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { HomeComponent } from 'app/pages/home/home.component';
import { PageNotFoundComponent } from 'app/pages/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    // loadChildren: 'app/pages/home/home.module#HomeModule',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    redirectTo: '',
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'containers',
    loadChildren: 'app/pages/containers/containers.module#ContainersModule'
  },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent,
  //   canActivate: [AuthGuard],
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
