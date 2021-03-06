import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TaskService, TaskError } from 'services/task/task.service';
import { ToastrService } from 'ngx-toastr';
import { Task } from 'app/models/task/task.model';
import {
  ServicesService,
  ServiceError,
} from 'services/services/services.service';
import { Formatter } from 'classes/formatter/formatter';

@Component({
  selector: 'app-task-detail-view',
  templateUrl: './task-detail-view.component.html',
  styleUrls: ['./task-detail-view.component.css'],
})
export class TaskDetailViewComponent implements OnInit {
  private taskID: string;
  public taskModel: Task;
  public taskName: string;
  public image: string;
  public serviceName: string;
  public isLoaded = false;

  constructor(
    private taskService: TaskService,
    private taskServiceSercice: ServicesService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.taskID = params.get('taskID');
      this.fetchTask();
    });
  }

  fetchTask() {
    this.taskService.inspect(this.taskID).subscribe(
      (task) => {
        this.taskModel = task;
        this.taskName = this.getTaskName();
        this.getServiceName();
        this.getImage();
        this.isLoaded = true;
      },
      (err: TaskError) => {
        this.toastr.error(err.message, 'An error occured');
      }
    );
  }

  getTaskName(): string {
    if (
      this.taskModel.Spec.ContainerSpec.Labels &&
      this.taskModel.Spec.ContainerSpec.Labels.hasOwnProperty(
        'com.docker.stack.namespace'
      )
    ) {
      return (
        this.taskModel.Spec.ContainerSpec.Labels['com.docker.stack.namespace'] +
        '.' +
        this.taskModel.Slot
      );
    } else {
      return this.taskModel.ID;
    }
  }

  getServiceName() {
    this.taskServiceSercice.inspectService(this.taskModel.ServiceID).subscribe(
      (service) => {
        this.serviceName = service.Spec.Name;
      },
      (err: ServiceError) => {
        this.toastr.error(err.message, 'An error occured');
      }
    );
  }

  getImage() {
    const taskImage = this.taskModel.Spec.ContainerSpec.Image.split('@');
    this.image = taskImage[0];
  }

  public PrettifyDateTime(buff: string): string {
    return Formatter.PrettifyDateTime(buff);
  }
}
