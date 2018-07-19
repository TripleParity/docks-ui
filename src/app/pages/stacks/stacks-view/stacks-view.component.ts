import { Component, OnInit } from '@angular/core';
import { Stack } from 'app/models/stack/stack.model';
import { StackService } from 'services/stack/stack.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-stacks-view',
  templateUrl: './stacks-view.component.html',
  styleUrls: ['./stacks-view.component.css'],
})
export class StacksViewComponent implements OnInit {

  public genericError: Boolean;
  public stackNotFoundError: Boolean;

  public stacks: Stack[];
  public createdStack = '';
  public searchString = [];
  column = [{ prop: 'stackName' }, { name: 'servicesCount' }];
  activeModal: NgbModalRef;
  stackNameToDelete = '';

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
    this.stackNotFoundError = true;
    this.fetchStacks();
  }

  fetchStacks() {
    this.stackService.getStacks().subscribe(
      (stacks: Stack[]) => {
        this.stacks = stacks;
        this.searchString = [...stacks];
        console.log(stacks);
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

  removeStack() {
    console.log('hello');
  }
}
