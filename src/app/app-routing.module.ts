import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContainersComponent} from './_shared/containers/containers.component';
import {ServiceListViewComponent} from './_shared';
import {PageNotFoundComponent} from './_shared/pagenotfound/pagenotfound.component';
import {AppComponent} from './app.component';


const routes: Routes = [
    {path: 'containers', component: ContainersComponent},
    {path: 'listServices', component: ServiceListViewComponent},
    {path: '**', component: PageNotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
