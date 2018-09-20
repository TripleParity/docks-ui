import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/guards/auth.guard';

// TODO(egeldenhuys): Remove containers module. Not a swarm component
// TODO(egeldenhuys): Fix: pagenotfound is sometimes displayed with navbar and userbar hidden

const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'refresh',
    loadChildren: 'app/pages/refresh/refresh.module#RefreshModule',
  },
  {
    path: 'home',
    loadChildren: 'app/pages/home/home.module#HomeModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'networks',
    loadChildren: 'app/pages/networks/network.module#NetworkModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'tasks',
    loadChildren: 'app/pages/tasks/tasks.module#TasksModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'services',
    loadChildren: 'app/pages/services/services.module#ServicesModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'volumes',
    loadChildren: 'app/pages/volumes/volumes.module#VolumesModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'stacks',
    loadChildren: 'app/pages/stacks/stacks.module#StacksModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'containers',
    loadChildren: 'app/pages/containers/containers.module#ContainersModule',
  },
  {
    path: 'users',
    loadChildren:
      'app/pages/user-management/user-management.module#UserManagementModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'webhooks',
    loadChildren: 'app/pages/webhooks/webhook.module#WebhookModule',
    canActivate: [AuthGuard],
  },
  {
    path: '',
    loadChildren: 'app/pages/home/home.module#HomeModule',
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'pagenotfound',
    loadChildren:
      'app/pages/pagenotfound/pagenotfound.module#PagenotfoundModule',
  },
  {
    path: '**',
    redirectTo: 'pagenotfound',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
