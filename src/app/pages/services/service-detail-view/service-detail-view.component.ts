import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {
  ServicesService,
  ServiceError,
} from 'services/services/services.service';
import { ToastrService } from 'ngx-toastr';
import { Service } from 'app/models/service/service.model';
import { Formatter } from 'classes/formatter/formatter';

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

  constructor(
    private router: Router,
    private serviceService: ServicesService,
    private Stack: ServicesService,
    private route: ActivatedRoute,
    private toastr: ToastrService
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
        this.getReplicas();
        this.getPort();
        this.getImage();
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

  getReplicas() {
    if (this.serviceModel.Spec.Mode.hasOwnProperty('Replicated')) {
      this.replicas = this.serviceModel.Spec.Mode.Replicated.Replicas.toString();
    } else {
      this.replicas = 'Global';
    }
  }

  public PrettifyDateTime(buff: string): string {
    return Formatter.PrettifyDateTime(buff);
  }

  getPort() {
    if (this.serviceModel.Spec.EndpointSpec.hasOwnProperty('Ports') && this.serviceModel.Spec.EndpointSpec.Ports[0]) {
      this.port = this.serviceModel.Spec.EndpointSpec.Ports[0].PublishedPort.toString();
    } else {
      this.port = '-';
    }
  }

  getImage() {
    this.image = this.serviceModel.Spec.TaskTemplate.ContainerSpec.Image.split('@')[0];
  }

  viewLogs() {
    console.log('stacks/' + this.stackName + '/logs');
    this.router.navigate(['services/' + this.serviceID + '/logs']);
  }
}
