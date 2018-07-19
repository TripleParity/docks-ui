import { Component, OnInit } from '@angular/core';
import { Stack } from 'app/models/stack/stack.model';
import { StackService, StackError } from 'services/stack/stack.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-stacks-view',
  templateUrl: './stacks-view.component.html',
  styleUrls: ['./stacks-view.component.css'],
})
export class StacksViewComponent implements OnInit {

  public stacks: Stack[];
  public createdStack = '';
  public searchString = [];
  public deletedStack = '';
  public activeModal: NgbModalRef;
  public stackNameToDelete = '';
  public stackNotFoundError = '';
  public genericError: Boolean;

  constructor(private stackService: StackService,
    private route: ActivatedRoute,
    private modalService: NgbModal) {
      this.route.paramMap.subscribe((params: ParamMap) => {
        if (params.has('createdStack')) {
          this.createdStack = params.get('createdStack');
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
      (err) => {
        console.error(err);
        this.genericError = true;
      }
    );
  }

  getRowHeight(row) {
    return (row.height = 50);
  }

  open(content, stackName: string) {
    this.stackNameToDelete = stackName;
    console.log(content);

    this.activeModal = this.modalService.open(content);
  }

  clearAlerts() {
    this.createdStack = '';
    this.stackNotFoundError = '';
    this.deletedStack = '';
    this.genericError = false;
  }

  removeStack() {
    this.stackService.removeStack(this.stackNameToDelete).subscribe(
      (result: StackError) => {
        this.clearAlerts();
        if (result === StackError.ERR_OK) {
          this.deletedStack = this.stackNameToDelete;
          console.log(this.deletedStack);
        } else {
          this.genericError = true;
        }

        this.activeModal.close();
        this.fetchStacks();
      },
      (err: StackError) => {
        this.clearAlerts();
        if (err === StackError.ERR_STACK_MISSING) {
          this.stackNotFoundError = this.stackNameToDelete;
        } else {
          this.genericError = true;
        }
        this.activeModal.close();
      }
    );
  }
}
