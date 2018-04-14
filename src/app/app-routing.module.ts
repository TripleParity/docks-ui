import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { StackComponent } from './stack/stack.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import {NetworksComponent} from './networks/networks.component';

const routes: Routes = [
    {path: 'containers', component: ContainerComponent},
    {path: 'stacks', component: StackComponent},
    {path: 'index', component: NavbarComponent},
    {path: 'networks', component: NetworksComponent},
    {path: '', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
