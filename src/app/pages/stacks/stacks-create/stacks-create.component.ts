import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Stack } from '../../../../app/models/stack/stack.model';
import { Router, ActivatedRoute } from '@angular/router';
import {
  StackService,
  StackError,
  StackErrorCode,
} from '../../../services/stack/stack.service';
import { ToastrService } from 'ngx-toastr';

import 'brace/mode/yaml';
import 'brace/theme/dreamweaver';
import { AceEditorComponent } from 'ng2-ace-editor';
import 'rxjs/add/operator/filter';

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
  public deploying = false;
  private preconfStacks;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private stackService: StackService,
    private toastr: ToastrService,
  ) {
    this.stackModel = {
      stackName: '',
      serviceCount: 0,
      stackFile: '',
    };

    // tslint:disable
    this.preconfStacks = [
      {key: 'WordPress', text: 'dmVyc2lvbjogJzMuMScNCnNlcnZpY2VzOg0KICAgZGI6DQogICAgIGltYWdlOiBteXNxbDo1LjcNCiAgICAgcmVzdGFydDogYWx3YXlzDQogICAgIGVudmlyb25tZW50Og0KICAgICAgIE1ZU1FMX1JPT1RfUEFTU1dPUkQ6IHNvbWV3b3JkcHJlc3MNCiAgICAgICBNWVNRTF9EQVRBQkFTRTogd29yZHByZXNzDQogICAgICAgTVlTUUxfVVNFUjogd29yZHByZXNzDQogICAgICAgTVlTUUxfUEFTU1dPUkQ6IHdvcmRwcmVzcw0KDQogICB3b3JkcHJlc3M6DQogICAgIGRlcGVuZHNfb246DQogICAgICAgLSBkYg0KICAgICBpbWFnZTogd29yZHByZXNzOmxhdGVzdA0KICAgICBwb3J0czoNCiAgICAgICAtICI4MDAwOjgwIg0KICAgICByZXN0YXJ0OiBhbHdheXMNCiAgICAgZW52aXJvbm1lbnQ6DQogICAgICAgV09SRFBSRVNTX0RCX0hPU1Q6IGRiOjMzMDYNCiAgICAgICBXT1JEUFJFU1NfREJfVVNFUjogd29yZHByZXNzDQogICAgICAgV09SRFBSRVNTX0RCX1BBU1NXT1JEOiB3b3JkcHJlc3M='},
      {key: 'Mongo', text: 'dmVyc2lvbjogJzMuMicKc2VydmljZXM6CiAgICBtb25nbzoKICAgICAgICBpbWFnZTogbW9uZ28KICAgIG1leHByZXNzOgogICAgICAgIGltYWdlOiBtb25nby1leHByZXNzCiAgICAgICAgZGVwZW5kc19vbjoKICAgICAgICAgICAgLSAibW9uZ28iCiAgICAgICAgcmVzdGFydDogImFsd2F5cyIKICAgICAgICBwb3J0czoKICAgICAgICAgICAgLSAiODAwMTo4MDgxIgogICAgICAgIGVudmlyb25tZW50OgogICAgICAgICAgICBNRV9DT05GSUdfT1BUSU9OU19FRElUT1JUSEVNRTogYW1iaWFuY2U='},
      {key: 'NGINX', text: 'dmVyc2lvbjogJzMnCgpzZXJ2aWNlczoKICAgIGFwcDoKICAgICAgICBpbWFnZTogbmdpbngKICAgICAgICBwb3J0czogCiAgICAgICAgICAgIC0gIjgwMDI6ODAi'}
    ];
    // tslint:enable
  }

  ngAfterViewInit() {
    this.editor.setTheme('dreamweaver');

    // this.editor.getEditor().setOptions({
    //     enableBasicAutoCompletion: true,
    // });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['preconf'] != null) {
        console.log(params['preconf']);
        this.preconfStacks.forEach(stack => {
          if (stack.key === params['preconf']) {
            this.replaceStackContents(stack.text);
            return;
          }
        });
      }
    });
  }

  uploadFile(event) {
    const reader = new FileReader();
    reader.readAsText(event.target.files[0]);
    const me = this;
    reader.onload = function() {
      me.fileText = reader.result.toString();
      me.stackModel.stackFile = me.fileText;
      me.text = me.fileText;
    };
  }

  submit() {
    this.stackModel.stackFile = this.text;
    this.toastr.info('Trying to deploy your stack', 'Busy');
    this.deploying = true;

    this.stackService
      .deployStack(this.stackModel.stackName, btoa(this.stackModel.stackFile))
      .subscribe(
        (result: StackError) => {
          this.toastr.success(
            'Successfully deployed stack ' + this.stackModel.stackName,
            'Success!'
          );
          this.deploying = false;
          this.router.navigate(['/stacks']);
        },
        (err: StackError) => {
          this.toastr.error(err.message, 'Error while deploying stack');
          this.deploying = false;
        }
      );
  }

  replaceStackContents(stack: string) {
    this.text = atob(stack);
  }
}
