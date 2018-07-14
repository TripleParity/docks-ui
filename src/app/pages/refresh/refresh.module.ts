import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefreshComponent } from '../../pages/refresh/refresh.component';
import { RefreshRoutingModule } from '../../pages/refresh/refresh-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RefreshRoutingModule,
  ],
  declarations: [
    RefreshComponent
  ]
})
export class RefreshModule { }
