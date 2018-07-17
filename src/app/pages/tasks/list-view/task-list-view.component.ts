import { Component, OnInit } from '@angular/core';
import { Task } from '../../../models/task/task.model';
import { TaskService } from '../../../services/task/task.service';
import { MockService } from '../../../services/mock/mock.service';
import { Formatter } from '../../../classes/formatter/formatter';

@Component({
  selector: 'app-task-list-view',
  templateUrl: './task-list-view.component.html',
  styleUrls: ['./task-list-view.component.css'],
})
export class TaskListViewComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private mockService: MockService
  ) {}
  public tasks: Task[] = [];

  ngOnInit() {
    this.taskService.getTasks().subscribe((task) => {
      for (let i = 0; i < task.length; i++) {
        this.tasks.push(task[i]);
      }
    });
  }

  public PrettifyDateTime(buff: string): string {
    return Formatter.PrettifyDateTime(buff);
  }
}
