import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Stack } from '../../../../app/models/stack/stack.model';
import { Router } from '@angular/router';
import {
  StackService,
  StackError,
  StackErrorCode,
} from '../../../services/stack/stack.service';
import { ToastrService } from 'ngx-toastr';

import 'brace/mode/yaml';
import 'brace/theme/dreamweaver';
import { AceEditorComponent } from 'ng2-ace-editor';


@Component({
  selector: 'app-stacks-create',
  templateUrl: './stacks-create.component.html',
  styleUrls: ['./stacks-create.component.css'],
})
export class StacksCreateComponent implements OnInit, AfterViewInit {
  @ViewChild('editor') editor: AceEditorComponent;
  public stackModel: Stack;
  public fileText = '';
  public text = 'Add the compose file here';
  constructor(
    private router: Router,
    private stackService: StackService,
    private toastr: ToastrService
  ) {
    this.stackModel = {
      stackName: '',
      serviceCount: 0,
      stackFile: '',
    };
  }

  ngAfterViewInit() {
    this.editor.setTheme('dreamweaver');

    this.editor.getEditor().setOptions({
        enableBasicAutoCompletion: true,
    });
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
  }

  submit() {
    this.stackService
      .deployStack(this.stackModel.stackName, btoa(this.stackModel.stackFile))
      .subscribe(
        (result: StackError) => {
          this.toastr.success(
            'Successfully deployed stack ' + this.stackModel.stackName,
            'Success!'
          );
          this.router.navigate(['/stacks']);
        },
        (err: StackError) => {
          this.toastr.error(err.message, 'Error while deploying stack');
        }
      );
  }

  replaceStackContents(stack) {
    this.stackModel.stackFile = atob(stack);
  }
}
