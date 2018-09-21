import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebhookCreateComponent } from './webhooks-create/webhook-create.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WebhookCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebhookRoutingModule {}
