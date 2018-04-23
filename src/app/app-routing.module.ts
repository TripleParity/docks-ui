import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContainersComponent} from './_shared/containers/containers.component';


const routes: Routes = [
    {path: 'containers', component: ContainersComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
