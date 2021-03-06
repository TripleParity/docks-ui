import { Component, OnInit } from '@angular/core';
import { Stack } from 'app/models/stack/stack.model';
import {
  StackService,
  StackError,
  StackErrorCode,
} from 'services/stack/stack.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
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
  public stackNameToDelete = '';
  public activeModal: NgbModalRef;
  public selected = [];

  constructor(
    private stackService: StackService,
    private router: Router,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
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

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.searchString.filter((stack: Stack) => {
      return stack.stackName.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.stacks = temp;
  }

  onSelect({ selected }) {
    // console.log('Select Event', selected, this.selected);
    this.router.navigate(['/stacks/' + selected[0].stackName]);
  }
}
