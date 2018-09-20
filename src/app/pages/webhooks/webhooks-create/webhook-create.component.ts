import { Component, OnInit } from '@angular/core';
import { Volume } from 'app/models/volume/volume.model';
import { Router } from '@angular/router';
import { VolumeService, VolumeError } from 'services/volume/volume.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { debug } from 'util';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-webhook-create',
  templateUrl: './webhook-create.component.html',
  styleUrls: ['./webhook-create.component.css'],
})
export class WebhookCreateComponent implements OnInit {

  ngOnInit() {}
}
