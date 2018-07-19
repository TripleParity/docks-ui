import { Component, OnInit } from '@angular/core';
import { Stack } from 'app/models/stack/stack.model';
import { Router } from '@angular/router';
import { StackService, StackError } from 'services/stack/stack.service';

@Component({
  selector: 'app-stacks-create',
  templateUrl: './stacks-create.component.html',
  styleUrls: ['./stacks-create.component.css'],
})
export class StacksCreateComponent implements OnInit {
  public stackModel: Stack;
  public alreadyExists = false;
  public genericError = false;
  public submitted = false;
  public warning = false;
  public fileText;
  public badUser = '';
  public hasPlacedText = false;

  constructor(private router: Router, private stackService: StackService) {
    this.stackModel = {
      name: '',
      serviceCount: 0,
      stackFile: '',
    };
  }

  ngOnInit() {}

  uploadFile(event) {
    const reader = new FileReader();
    reader.readAsText(event.target.files[0]);
    const me = this;
    reader.onload = function() {
      me.fileText = reader.result;
      me.stackModel.stackFile = me.fileText;
    };
    this.hasPlacedText = true;
  }

  setFile(event) {

    this.hasPlacedText = true;
  }

  clearAlerts() {
    this.warning = false;
  }

  submit() {
    this.alreadyExists = false;
    this.genericError = false;
    this.submitted = true;

    this.stackService
      .deployStack(this.stackModel.name, btoa(this.stackModel.stackFile))
      .subscribe(
        (result: StackError) => {
          this.clearAlerts();
          this.submitted = false;
          this.router.navigate([
            '/stacks',
            { createdStack: this.stackModel.name },
          ]);
        },
        (err: StackError) => {
          console.error(err);
          this.clearAlerts();
          if (err === StackError.ERR_STACK_NAME_TAKEN) {
            this.alreadyExists = true;
            this.badUser = this.stackModel.name;
          } else {
            this.warning = true;
          }
          this.submitted = false;
        }
      );
  }
}