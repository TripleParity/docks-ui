import { Component, OnInit } from '@angular/core';
import { Network } from 'app/models/network/network.model';
import { Router } from '@angular/router';
import { NetworkService, NetworkError } from 'services/network/network.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-network-create',
  templateUrl: './network-create.component.html',
  styleUrls: ['./network-create.component.css'],
})
export class NetworkCreateComponent implements OnInit {
  public networkModel: Network;

  constructor(
    private router: Router,
    private networkService: NetworkService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}

  networkForm: FormGroup = this.fb.group({
    Name: ['', Validators.required],
    Driver: [''],
    checkBoxes: new FormGroup({
      Ingress: new FormControl(false),
      IsAttachable: new FormControl(false),
      EnableIPv6: new FormControl(false),
      Internal: new FormControl(false)
    }),
    Options: this.fb.array([
      // this.initOptions()
    ]),
    Labels: this.fb.array([
      // this.initOptions()
    ]),
  });

  ngOnInit() {}

  get Name() {
    return this.networkForm.get('Name');
  }

  submit() {
   console.log('Ingress ' + this.networkForm.controls['checkBoxes'].value.Ingress);
  }
}
