import { Component, OnInit } from '@angular/core';
import { Stack } from 'app/models/stack/stack.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {
  StackService,
  StackError,
  StackResult,
} from 'services/stack/stack.service';

@Component({
  selector: 'app-stack-edit',
  templateUrl: './stack-edit.component.html',
  styleUrls: ['./stack-edit.component.css'],
})
export class StackEditComponent implements OnInit {
  public stackModel: Stack;
  public alreadyExists = false;
  public genericError = false;
  public submitted = false;
  public warning = false;
  public fileText = '';
  public badUser = '';
  public warningMessage = 'Something went wrong...';

  constructor(
    private router: Router,
    private stackService: StackService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.stackModel = {
        stackName: params.get('stackName'),
        serviceCount: 0,
        stackFile: '',
      };
    });
  }

  uploadFile(event) {
    const reader = new FileReader();
    reader.readAsText(event.target.files[0]);
    const me = this;
    reader.onload = function() {
      me.fileText = reader.result;
      me.stackModel.stackFile = me.fileText;
    };
  }

  clearAlerts() {
    this.warning = false;
  }

  submit() {
    this.alreadyExists = false;
    this.genericError = false;
    this.submitted = true;

    this.stackService
      .updateStack(this.stackModel.stackName, btoa(this.stackModel.stackFile))
      .subscribe(
        (result) => {
          this.clearAlerts();
          this.submitted = false;
          this.router.navigate([
            '/stacks',
            { updatedStack: this.stackModel.stackName },
          ]);
        },
        (err: StackResult) => {
          console.error(err);
          this.clearAlerts();
          if (err.code === StackError.ERR_STACK_NAME_TAKEN) {
            this.alreadyExists = true;
            this.badUser = this.stackModel.stackName;
          } else {
            this.warning = true;
            this.warningMessage = err.message;
          }
          this.submitted = false;
        }
      );
  }
}
