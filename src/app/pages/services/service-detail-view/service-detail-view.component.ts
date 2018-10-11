import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {
  ServicesService,
  ServiceError,
} from 'services/services/services.service';
import { ToastrService } from 'ngx-toastr';
import { Service } from 'app/models/service/service.model';
import { Formatter } from 'classes/formatter/formatter';
import { Task } from 'app/models/task/task.model';
import { TaskService, TaskError } from 'services/task/task.service';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-service-detail-view',
  templateUrl: './service-detail-view.component.html',
  styleUrls: ['./service-detail-view.component.css'],
})
export class ServiceDetailViewComponent implements OnInit {
  serviceID: string;
  public serviceModel: Service;
  public stackName: string;
  public isLoaded = false;
  public mode: string;
  public replicas: string;
  public port: string;
  public image: string;
  public activeModal: NgbModalRef;

  public tasks: Task[];

  constructor(
    private router: Router,
    private serviceService: ServicesService,
    private Stack: ServicesService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private taskService: TaskService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.serviceID = params.get('serviceID');
      this.fetchService();
    });
  }

  fetchService() {
    this.serviceService.inspectService(this.serviceID).subscribe(
      (service) => {
        this.serviceModel = service;
        this.getStackName();
        this.isLoaded = true;
        this.getMode();
        this.getPort();
        this.getImage();
        this.getTasks(this.serviceModel.ID);
      },
      (err: ServiceError) => {
        this.toastr.error(err.message, 'An error occured');
      }
    );
  }

  getStackName() {
    if (
      this.serviceModel.Spec.Labels &&
      this.serviceModel.Spec.Labels.hasOwnProperty('com.docker.stack.namespace')
    ) {
      this.stackName = this.stackName = this.serviceModel.Spec.Labels[
        'com.docker.stack.namespace'
      ];
    }
  }

  getMode() {
    if (this.serviceModel.Spec.Mode.hasOwnProperty('Replicated')) {
      this.mode = 'Replicated';
    } else {
      this.mode = 'Global';
    }
  }

  public PrettifyDateTime(buff: string): string {
    return Formatter.PrettifyDateTime(buff);
  }

  getPort() {
    if (
      this.serviceModel.Spec.EndpointSpec.hasOwnProperty('Ports') &&
      this.serviceModel.Spec.EndpointSpec.Ports[0]
    ) {
      this.port = this.serviceModel.Spec.EndpointSpec.Ports[0].PublishedPort.toString();
    } else {
      this.port = '-';
    }
  }

  getImage() {
    this.image = this.serviceModel.Spec.TaskTemplate.ContainerSpec.Image.split(
      '@'
    )[0];
  }

  viewLogs() {
    this.router.navigate(['services/' + this.serviceID + '/logs']);
  }

  getRowHeight(row) {
    return (row.height = 50);
  }

  onSelect({ selected }) {
    // console.log('Select Event', selected, this.selected);
    this.router.navigate(['/tasks/' + selected[0].ID]);
  }

  getTasks(serviceId: string) {
    this.taskService.getTaskInService(this.serviceID).subscribe(
      (task) => {
        this.tasks = task;
        this.getReplicas();
      },
      (err: TaskError) => {
        this.toastr.error(err.message, 'An error occured');
      }
    );
  }


  getReplicas() {
    if (this.serviceModel.Spec.Mode.hasOwnProperty('Replicated')) {
      let numberOfRunningTasks = 0;
      this.tasks.forEach(element => {
        if (element.Status.State === 'running') {
          numberOfRunningTasks++;
        }
      });
      this.replicas = numberOfRunningTasks.toString() + '/' + this.serviceModel.Spec.Mode.Replicated.Replicas.toString();
    } else {
      this.replicas = 'Global';
    }
  }

  getTaskName(labels: Object, slot: number, id: string): string {
    if (labels && labels.hasOwnProperty('com.docker.stack.namespace')) {
      return labels['com.docker.stack.namespace'] + '.' + slot;
    } else {
      return id;
    }
  }

  getTaskImage(image: String): string {
    const taskImage = image.split('@');
    return taskImage[0];
  }

  open(content) {
    this.activeModal = this.modalService.open(content);
  }

  removeService() {
    this.serviceService.deleteService(this.serviceModel.ID).subscribe(
      (service) => {
        this.toastr.success('Service ' + this.stackName + ' was successfully removed');
        this.activeModal.close();
        this.router.navigate(['/services/list']);
      },
      (err: ServiceError) => {
        this.toastr.error(err.message, 'Could not remove stack');
        this.activeModal.close();
      }
    );
  }
}
