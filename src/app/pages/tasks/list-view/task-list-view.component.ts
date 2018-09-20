import { Component, OnInit } from '@angular/core';
import { Task } from '../../../models/task/task.model';
import { TaskService, TaskError } from '../../../services/task/task.service';
import { MockService } from '../../../services/mock/mock.service';
import { Formatter } from '../../../classes/formatter/formatter';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-list-view',
  templateUrl: './task-list-view.component.html',
  styleUrls: ['./task-list-view.component.css'],
})
export class TaskListViewComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private mockService: MockService,
    private toastr: ToastrService
  ) {}
  public tasks: Task[] = [];
  public previous = 0;
  public isLoaded = false;

  ngOnInit() {
    this.fetchTasks();
  }

  fetchTasks() {
    this.taskService.getTasks().subscribe(
      (task) => {
        this.tasks = task;
        this.isLoaded = true;
      },
      (err: TaskError) => {
        this.toastr.error(err.message, 'An error occured');
      }
    );
  }

  getRowHeight(row) {
    return (row.height = 50);
  }
}
