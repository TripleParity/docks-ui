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
  public text = '#Add or edit the compose file here\n';

  constructor(
    private router: Router,
    private stackService: StackService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngAfterViewInit() {
    this.editor.setTheme('dreamweaver');

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
    this.stackService
      .updateStack(this.stackModel.stackName, btoa(this.stackModel.stackFile))
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
      );
  }
}
