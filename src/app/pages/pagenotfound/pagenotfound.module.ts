import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PageNotFoundComponent } from '../../pages/pagenotfound/pagenotfound.component';
import { PagenotfoundRoutingModule } from '../../pages/pagenotfound/pagenotfound-routing.module';

@NgModule({
  imports: [CommonModule, PagenotfoundRoutingModule, NgbModule],
  declarations: [PageNotFoundComponent],
  providers: [],
})
export class PagenotfoundModule {}
