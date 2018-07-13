import { Component, OnInit } from '@angular/core';
import { Task } from '../../../_models';
import { TaskService } from '../../../_services';
import { MockService} from '../../../_services';
import { Formatter } from '../../../_classes';

@Component({
  selector: 'app-task-list-view',
  templateUrl: './task-list-view.component.html',
  styleUrls: ['./task-list-view.component.css']
})

export class TaskListViewComponent implements OnInit {

  constructor(private taskService: TaskService, private mockService: MockService) { }
  public tasks: Task[] = [];
  public isCollapsed: Boolean[] = [];
  public previous = 0;
  public isLoaded = false;

  ngOnInit() {
      this.taskService.getTasks().subscribe((task) => {
          for (let i = 0; i < task.length; i++) {
              this.tasks.push(task[i]);
              this.isCollapsed.push(false);
          }
          this.isLoaded = true;
      });
  }

  public PrettifyDateTime(buff: string): string {
      return Formatter.PrettifyDateTime(buff);
  }

  public Collapse(i) {
    if (i !== this.previous) {
        this.isCollapsed[this.previous] = false;
        this.isCollapsed[i] = !this.isCollapsed[i];
        this.previous = i;
    } else {
        this.isCollapsed[i] = !this.isCollapsed[i];
    }
  }
}
