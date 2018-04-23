import { NgModule } from '@angular/core';
import { ContainersComponent } from './containers.component';
import { ContainerService } from '../../_services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [],
    exports: [],
    declarations: [ContainersComponent],
    providers: [HttpClientModule, ContainerService],
})

export class ContainerModule {

}
