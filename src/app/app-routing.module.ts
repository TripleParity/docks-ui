import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {ContainerComponent} from './container/container.component';
import {StackComponent} from './stack/stack.component';

const routes: Routes = [
    {path: 'containers', component: ContainerComponent},
    {path: 'stacks', component: StackComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
