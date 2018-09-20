import { Component, OnInit } from '@angular/core';
import { Task } from '../../../models/task/task.model';
import { TaskService } from '../../../services/task/task.service';

@Component({
  selector: 'app-task-list-view',
  templateUrl: './task-list-view.component.html',
  styleUrls: ['./task-list-view.component.css'],
})
export class TaskListViewComponent implements OnInit {
  constructor(private taskService: TaskService) {}
  public tasks: Task[] = [];
  public previous = 0;
  public isLoaded = false;

  ngOnInit() {
    this.fetchTasks();
  }

  fetchTasks() {
    this.taskService.getTasks().subscribe((task) => {
      this.tasks = task;
      this.isLoaded = true;
      console.log(this.tasks);
    });
  }

  getRowHeight(row) {
    return (row.height = 50);
  }
}
