import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { WebhookService, WebhookError } from 'services/webhook/webhook.service';
import { Webhook, DockerEventTypes } from 'app/models/webhook/webhook.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormArray, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import 'brace/mode/javascript';
import 'brace/theme/dreamweaver';
import { AceEditorComponent } from 'ng2-ace-editor';

@Component({
  selector: 'app-webhook-create',
  templateUrl: './webhook-create.component.html',
  styleUrls: ['./webhook-create.component.css'],
})
export class WebhookCreateComponent implements OnInit, AfterViewInit {
  @ViewChild('editor') editor: AceEditorComponent;
  public name: string;
  public url: string;
  public volumes: boolean;
  public networks: boolean;
  public configs: boolean;
  public secrets: boolean;
  public services: boolean;
  public daemons: boolean;
  public images: boolean;
  public nodes: boolean;
  public default_text = '(json) => { return json;}';
  public text: string = this.default_text;
  public triggerTypes = [
    'Volumes',
    'Network',
    'Service',
    'Node',
    'Image',
    'Daemon',
    'Secret',
    'Config',
  ];

  webhookForm: FormGroup = this.fb.group({
    Name: ['', Validators.required],
    url: ['', Validators.required],
    Labels: new FormGroup(this.initTriggers()),
    Editor: [''],
  });

  constructor(
    private wh: WebhookService,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.name = '';
    this.url = '';
  }

  ngAfterViewInit() {
    this.editor.setTheme('dreamweaver');

    // this.editor.getEditor().setOptions({
    //     enableBasicAutoCompletion: true,
    // });
  }

  ngOnInit() {}

  initLabels() {
    return this.fb.group({
      Name: ['', Validators.required],
    });
  }

  initTriggers() {
    const fGroup = {};
    this.triggerTypes.forEach((element) => {
      fGroup[element] = new FormControl(false);
    });

    return fGroup;
  }

  get Name() {
    return this.webhookForm.get('Name');
  }

  get URL() {
    return this.webhookForm.get('url');
  }

  get Labels() {
    return this.webhookForm.get('Labels') as FormArray;
  }

  addLabel() {
    const control = <FormArray>this.webhookForm.controls['Labels'];
    control.push(this.initLabels());
  }

  removeLabel(i: number) {
    const control = <FormArray>this.webhookForm.controls['Labels'];
    control.removeAt(i);
  }

  convertLabels() {
    let i = 0;
    let temp = '{';

    while (i < this.Labels.length) {
      temp += '"' + this.Labels.at(i).get('Name').value + '":"';
      i++;
    }

    // console.log(JSON.stringify(this.Options));
    if (this.Labels.length > 0) {
      temp = temp.substring(0, temp.length - 1);
    }

    temp += '}';

    return temp;
  }

  submit() {
    const t: DockerEventTypes[] = [];

    const name = this.webhookForm.get('Name').value;
    const url = this.webhookForm.get('url').value;
    const typesStrs = [];
    if (this.daemons) {
      typesStrs.push(DockerEventTypes.DAEMON);
    }
    if (this.configs) {
      typesStrs.push(DockerEventTypes.CONFIG);
    }
    if (this.networks) {
      typesStrs.push(DockerEventTypes.NETWORK);
    }
    if (this.volumes) {
      typesStrs.push(DockerEventTypes.VOLUME);
    }
    if (this.images) {
      typesStrs.push(DockerEventTypes.IMAGE);
    }
    if (this.secrets) {
      typesStrs.push(DockerEventTypes.SECRET);
    }
    if (this.services) {
      typesStrs.push(DockerEventTypes.SERVICE);
    }
    if (this.nodes) {
      typesStrs.push(DockerEventTypes.NODE);
    }
    // TODO: Add Task ?

    const webby: Webhook = { name: name, url: url, types: typesStrs };
    if (this.text !== this.default_text) {
      webby.modifier = btoa(this.text);
    }
    console.log({ webby });
    this.wh.createWebhook(webby).subscribe(
      (result: WebhookError) => {
        this.toastr.success(
          'Webhook ' + webby['name'] + 'created!',
          'Success!'
        );
        this.router.navigate(['/webhooks']);
      },
      (err: WebhookError) => {
        this.toastr.error(err.message, 'Could not create webhook');
      }
    );
  }

  public hasNameAndURL() {
    if (
      this.webhookForm.get('Name').value > 0 &&
      this.webhookForm.get('url').value > 0
    ) {
      return true;
    }
    return false;
  }

  onChange() {}
}
