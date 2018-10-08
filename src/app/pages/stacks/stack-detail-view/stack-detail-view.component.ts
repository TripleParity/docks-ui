import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {
  StackService,
  StackError,
  StackErrorCode,
} from 'services/stack/stack.service';
import { ToastrService } from 'ngx-toastr';
import { Service } from 'app/models/service/service.model';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ServiceError } from 'services/services/services.service';
import { Mode } from 'app/models/service/mode/mode.model';
import { EndpointSpec } from 'app/models/service/endpoint/endpointspec.model';

@Component({
  selector: 'app-stack-detail-view',
  templateUrl: './stack-detail-view.component.html',
  styleUrls: ['./stack-detail-view.component.css'],
})
export class StackDetailViewComponent implements OnInit {
  public stackName: string;
  public service: Service[];
  public isLoaded = false;
  public activeModal: NgbModalRef;
  public selected = [];

  constructor(
    private router: Router,
    private stackService: StackService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.stackName = params.get('stackName');
      this.fetchStackServices();
    });
  }

  fetchStackServices() {
    this.stackService.getStackServices(this.stackName).subscribe(
      (service) => {
        this.service = service;
        this.isLoaded = true;
      },
      (err: ServiceError) => {
        this.toastr.error(
          'Something went wrong...',
          'Could not retrieve services'
        );
      }
    );
  }

  removeStack() {
    this.stackService.removeStack(this.stackName).subscribe(
      (result: StackError) => {
        if (result.code !== StackErrorCode.ERR_OK) {
          this.toastr.success('Stack successfully removed', 'Success!');
        } else {
          this.toastr.error(
            'Something went wrong...',
            'Could not remove stack'
          );
        }
        this.activeModal.close();
        this.router.navigate(['/stacks']);
      },
      (err: StackError) => {
        this.toastr.error(err.message, 'Could not remove stack');
        this.activeModal.close();
      }
    );
  }

  open(content, stackName: string) {
    this.activeModal = this.modalService.open(content);
  }

  getRowHeight(): number {
    return 50;
  }

  getImage(image: string): string {
    return image.split('@')[0];
  }

  getMode(mode: Mode): string {
    if (mode.hasOwnProperty('Replicated')) {
      return 'Replicated';
    } else {
      return 'Global';
    }
  }

  getReplicas(mode: Mode): string {
    if (mode.hasOwnProperty('Replicated')) {
      return mode.Replicated.Replicas.toString();
    } else {
      return 'gloabal';
    }
  }

  getPort(endPoint: EndpointSpec): string {
    if (endPoint.hasOwnProperty('Ports') && endPoint.Ports[0]) {
      return endPoint.Ports[0].PublishedPort.toString();
    } else {
      return '-';
    }
  }

  onSelect({ selected }) {
    this.router.navigate(['/services/' + selected[0].ID]);
  }
}
