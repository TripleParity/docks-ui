import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PageNotFoundComponent } from "./_shared/pagenotfound/pagenotfound.component";
import { LoginComponent } from "_shared/login/login.component";
import { AuthGuard } from "./_guards/auth.guard";
import { RefreshComponent } from "app/refresh/refresh.component";

const routes: Routes = [
  { path: "login", component: LoginComponent, canActivate: [AuthGuard] },
  { path: "refresh", component: RefreshComponent },
  {
    path: "",
    redirectTo: "",
    pathMatch: "full"
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
