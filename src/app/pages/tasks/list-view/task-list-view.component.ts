import { Component, OnInit } from '@angular/core';
import { Task } from '../../../models/task/task.model';
import { TaskService, TaskError } from '../../../services/task/task.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NodeService, NodeError } from 'services/node/node.service';
import { Node } from 'app/models/node/node.model';
import { element } from 'protractor';

@Component({
  selector: 'app-task-list-view',
  templateUrl: './task-list-view.component.html',
  styleUrls: ['./task-list-view.component.css'],
})
export class TaskListViewComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private nodeService: NodeService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  public tasks: Task[];
  public searchString: Task[];
  public previous = 0;
  public isLoaded = false;
  public selected = [];

  ngOnInit() {
    this.tasks = [];
    this.fetchTasks();
  }

  fetchTasks() {
    this.taskService.getTasks().subscribe(
      (task) => {
        this.tasks = task;
        this.searchString = [...this.tasks];

        this.prettyfyTasks();
        this.isLoaded = true;
      },
      (err: TaskError) => {
        this.toastr.error(err.message, 'An error occured');
      }
    );
  }

  prettyfyTasks() {
    this.tasks.forEach(elem => {
      elem.Name = this.getTaskName(elem.Spec.ContainerSpec.Labels, elem.Slot, elem.ID);
      elem.Spec.ContainerSpec.Image = this.getImage(elem.Spec.ContainerSpec.Image);
    });
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

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.searchString.filter((task: Task) => {
    return (
        task.Name.toLowerCase().indexOf(val) !== -1 ||
        task.Spec.ContainerSpec.Image.toLowerCase().indexOf(val) !== -1 ||
        task.NodeHostname.toLowerCase().indexOf(val) !== -1 ||
        task.Status.State.toLowerCase().indexOf(val) !== -1 ||
        !val
      );
    });

    // update the rows
    this.tasks = temp;
    // Whenever the filter changes, always go back to the first page
    // this.table.offset = 0;
  }

  onSelect({ selected }) {
    this.router.navigate(['/tasks/' + selected[0].ID]);
  }

  getImage(image: String): string {
    const taskImage = image.split('@');
    return taskImage[0];
  }
}
