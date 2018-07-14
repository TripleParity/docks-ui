import { Component, OnInit } from '@angular/core';

import { ContainerService } from '../../services/container/container.service';
import { TaskService } from '../../services/task/task.service';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.css'],
})

export class ContainersComponent implements OnInit {

  constructor(private cs: ContainerService, private ts: TaskService) { }

  ngOnInit() {
  }

}
