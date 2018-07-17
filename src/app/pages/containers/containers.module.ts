import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainersComponent } from '../../pages/containers/containers.component';
import { ContainerService } from '../../services/container/container.service';
import { TaskService } from '../../services/task/task.service';

import { ContainersRoutingModule } from '../../pages/containers/containers-routing.module';

@NgModule({
  imports: [CommonModule, ContainersRoutingModule],
  declarations: [ContainersComponent],
  providers: [ContainerService, TaskService],
})
export class ContainersModule {}
