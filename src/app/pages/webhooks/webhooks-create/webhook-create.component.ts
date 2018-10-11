import { Component, OnInit } from '@angular/core';
import { WebhookService, WebhookError } from 'services/webhook/webhook.service';
import { Webhook, DockerEventTypes } from 'app/models/webhook/webhook.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormArray } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-webhook-create',
  templateUrl: './webhook-create.component.html',
  styleUrls: ['./webhook-create.component.css'],
})
export class WebhookCreateComponent implements OnInit {
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

  webhookForm: FormGroup = this.fb.group({
    Name: ['', Validators.required],
    Driver: ['', Validators.required],
    Options: this.fb.array([
      // this.initOptions()
    ]),
    Labels: this.fb.array([
      // this.initLabels();
    ]),
  });

  constructor(
    private wh: WebhookService,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.name = '';
    this.url = '';
  }

  ngOnInit() {}

  submit() {
    const t: DockerEventTypes[] = [];
    if (this.volumes) {
      t.push(DockerEventTypes.VOLUME);
    }
    if (this.networks) {
      t.push(DockerEventTypes.NETWORK);
    }
    if (this.configs) {
      t.push(DockerEventTypes.CONFIG);
    }
    if (this.secrets) {
      t.push(DockerEventTypes.SECRET);
    }
    if (this.services) {
      t.push(DockerEventTypes.SERVICE);
    }
    if (this.daemons) {
      t.push(DockerEventTypes.DAEMON);
    }
    if (this.images) {
      t.push(DockerEventTypes.IMAGE);
    }
    if (this.nodes) {
      t.push(DockerEventTypes.NODE);
    }

    const webby: Webhook = { name: this.name, url: this.url, types: t };

    this.wh.createWebhook(webby).subscribe(
      (result: WebhookError) => {
        this.toastr.success('Created webhook ' + webby['name'], 'Success!');
        this.router.navigate(['/webhooks']);
      },
      (err: WebhookError) => {
        this.toastr.error(err.message, 'Error while creating webhook');
      }
    );
  }

  public hasNameAndURL() {
    if (this.name.length > 0 && this.url.length > 0) {
      return true;
    }
    return false;
  }

  onChange() {}
}
