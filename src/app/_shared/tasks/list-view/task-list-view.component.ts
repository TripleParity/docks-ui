import { Component, OnInit } from '@angular/core';
import { Task } from '../../../_models/index';
import { TaskService } from '../../../_services/index';
import { MockService} from '../../../_services/index';
import { Formatter } from '../../../_classes/index';

@Component({
  selector: 'app-task-list-view',
  templateUrl: './task-list-view.component.html',
  styleUrls: ['./task-list-view.component.css']
})

export class TaskListViewComponent implements OnInit {

  constructor(private taskService: TaskService, private mockService: MockService) { }
  public tasks: Task[] = [];

  ngOnInit() {
      this.mockService.getTasks().subscribe((task) => {
          for (let i = 0; i < task.length; i++) {
              this.tasks.push(task[i]);
          }
      });
  }

  public PrettifyDateTime(buff: string): string {
      return Formatter.PrettifyDateTime(buff);
  }


}
