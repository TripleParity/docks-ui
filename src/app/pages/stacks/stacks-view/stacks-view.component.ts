import { Component, OnInit } from '@angular/core';
import { Stack } from 'app/models/stack/stack.model';
import { StackService, StackError, StackErrorCode } from 'services/stack/stack.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-stacks-view',
  templateUrl: './stacks-view.component.html',
  styleUrls: ['./stacks-view.component.css'],
})
export class StacksViewComponent implements OnInit {
  public stacks: Stack[];
  public searchString = [];
  public createdStack = '';
  public deletedStack = '';
  public updatedStack = '';
  public stackNameToDelete = '';
  public stackNotFoundError = '';
  public activeModal: NgbModalRef;
  public genericError: Boolean;

  constructor(
    private stackService: StackService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private toastr: ToastrService,
  ) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.has('createdStack')) {
        this.createdStack = params.get('createdStack');
      }
      if (params.has('updatedStack')) {
        this.updatedStack = params.get('updatedStack');
      }
    });
  }

  ngOnInit() {
    this.genericError = false;
    this.fetchStacks();
  }

  fetchStacks() {
    this.stackService.getStacks().subscribe(
      (stacks: Stack[]) => {
        this.stacks = stacks;
        this.searchString = [...stacks];
      },
      (err: StackError) => {
        this.toastr.error(err.message, 'An error occured');
        this.genericError = true;
      }
    );
  }

  getRowHeight(row) {
    return (row.height = 50);
  }

  open(content, stackName: string) {
    this.stackNameToDelete = stackName;
    this.activeModal = this.modalService.open(content);
  }

  clearAlerts() {
    this.createdStack = '';
    this.stackNotFoundError = '';
    this.deletedStack = '';
    this.genericError = false;
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.searchString.filter((stack: Stack) => {
      return stack.stackName.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.stacks = temp;
  }

  removeStack() {
    this.stackService.removeStack(this.stackNameToDelete).subscribe(
      (result: StackError) => {
        this.clearAlerts();
        if (result.code === StackErrorCode.ERR_OK) {
          this.deletedStack = this.stackNameToDelete;
        } else {
          this.genericError = true;
        }

        this.activeModal.close();
        this.fetchStacks();
      },
      (err: StackError) => {
        this.clearAlerts();
        if (err.code === StackErrorCode.ERR_STACK_MISSING) {
          this.stackNotFoundError = this.stackNameToDelete;
        } else {
          this.genericError = true;
        }
        this.activeModal.close();
      }
    );
  }
}
