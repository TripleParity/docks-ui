import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Stack } from '../../../../app/models/stack/stack.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
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
  selector: 'app-stack-edit',
  templateUrl: './stack-edit.component.html',
  styleUrls: ['./stack-edit.component.css'],
})
export class StackEditComponent implements OnInit, AfterViewInit {
  @ViewChild('editor') editor: AceEditorComponent;
  public stackModel: Stack;
  public fileText = '';
  public text = 'Edit the compose file here after uploading it';
  public waitingForResponse = false;

  constructor(
    private router: Router,
    private stackService: StackService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngAfterViewInit() {
    this.editor.setTheme('dreamweaver');

    // Fetch stack definition for current stack
    this.waitingForResponse = true;
    this.stackService.getStackFile(this.stackModel.stackName)
      .subscribe(
        (result) => {
          this.text = result.stackFile;
        },

        (err: StackError) => {
          this.toastr.warning(err.message, 'Could not decode stack.');
        },
      ).add(
        () => {this.waitingForResponse = false; }
      );

    // this.editor.getEditor().setOptions({
    //     enableBasicAutoCompletion: true,
    // });
  }

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
      me.editor.text = reader.result;
    };
  }

  submit() {
    this.waitingForResponse = true;
    this.toastr.info('Submitting stack to be updated...');
    this.stackService
      .updateStack(this.stackModel.stackName, btoa(this.text))
      .subscribe(
        (result) => {
          this.toastr.success(
            'Successfully updated stack ' + this.stackModel.stackName,
            'Success!'
          );
          this.router.navigate(['/stacks']);
        },
        (err: StackError) => {
          this.toastr.error(err.message, 'Error updating stack');
        }
      )
      .add(
        () => {this.waitingForResponse = false; }
      );
  }
}
