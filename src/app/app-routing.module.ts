import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContainersComponent} from './_shared/containers/containers.component';
import {ServiceListViewComponent} from './_shared';
import {PageNotFoundComponent} from './_shared/pagenotfound/pagenotfound.component';


const routes: Routes = [
    {path: 'containers', component: ContainersComponent},
    {path: 'listServices', component: ServiceListViewComponent},
    {path: 'networks', loadChildren: 'app/_shared/networks/network.module#NetworkModule'},
    {path: '**' , component: PageNotFoundComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes , {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
