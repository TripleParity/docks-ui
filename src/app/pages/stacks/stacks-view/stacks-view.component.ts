import { Component, OnInit } from '@angular/core';
import { Stack } from 'app/models/stack/stack.model';
import { StackService } from 'services/stack/stack.service';

@Component({
  selector: 'app-stacks-view',
  templateUrl: './stacks-view.component.html',
  styleUrls: ['./stacks-view.component.css']
})
export class StacksViewComponent implements OnInit {

  public genericError: Boolean;
  public stackNotFoundError: Boolean;

  public stacks: Stack[];
  public searchString = [];
  column = [{ prop: 'serviceCount' }];

  constructor(
    private stackService: StackService) { }

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

}
