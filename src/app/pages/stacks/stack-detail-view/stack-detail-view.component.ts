import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { StackService, StackError, StackErrorCode } from 'services/stack/stack.service';
import { ToastrService } from 'ngx-toastr';
import { Service } from 'app/models/service/service.model';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ServiceError } from 'services/services/services.service';

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

  constructor(
    private router: Router,
    private stackService: StackService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private modalService: NgbModal,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.stackName = params.get('stackName');
    });
  }


  fetchStackServices() {
    console.log('In here with the timer');
    this.stackService.getStackServices(this.stackName).subscribe(
      (service) => {
        console.log(service);
        this.service = service;
        this.isLoaded = true;
      }, (err: ServiceError) => {
          this.toastr.error(
          'Something went wrong...',
          'Could not retrieve services' );
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

}
