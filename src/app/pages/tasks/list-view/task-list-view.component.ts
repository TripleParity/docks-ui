import { Component, OnInit } from '@angular/core';
import { Task } from '../../../models/task/task.model';
import { TaskService, TaskError } from '../../../services/task/task.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list-view',
  templateUrl: './task-list-view.component.html',
  styleUrls: ['./task-list-view.component.css'],
})
export class TaskListViewComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  public tasks: Task[] = [];
  public previous = 0;
  public isLoaded = false;
  public selected = [];

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

  getTaskName(labels: Object, slot: number, id: string): string {
    if (labels && labels.hasOwnProperty('com.docker.stack.namespace')) {
      return labels['com.docker.stack.namespace'] + '.' + slot;
    } else {
      return id;
    }
  }

  onSelect({ selected }) {
    this.router.navigate(['/tasks/' + selected[0].ID]);
  }

  // getImage() {
  //   const taskImage = this.taskModel.Spec.ContainerSpec.Image.split('@');
  //   this.image = taskImage[0];
  // }
}
