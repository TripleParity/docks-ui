import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {ContainerComponent} from './container/container.component';
import {StackComponent} from './stack/stack.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
    {path: 'containers', component: ContainerComponent},
    {path: 'stacks', component: StackComponent},
    {path: 'index', component: NavbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
