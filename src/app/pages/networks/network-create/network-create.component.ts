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
    checkBoxes: new FormGroup({
      Ingress: new FormControl(false),
      IsAttachable: new FormControl(false),
      EnableIPv6: new FormControl(false),
      Internal: new FormControl(false),
    }),
    Driver: [''],
    Options: this.fb.array([
      // this.initOptions()
    ]),
    Subnet: [''],
    GateWay: [''],
    Labels: this.fb.array([
      // this.initOptions()
    ]),
  });

  ngOnInit() {}

  submit() {
    console.log(
      'Ingress ' + this.networkForm.controls['checkBoxes'].value.Ingress
    );
  }

  convertOptions() {
    let i = 0;
    const test = {};
    while (i < this.Options.length) {
      test[this.Options.at(i).get('OptionName').value] = this.Options.at(i).get(
        'Value'
      ).value;
      i++;
    }

    return test;
  }

  convertLabels() {
    let i = 0;
    const test = {};

    while (i < this.Labels.length) {
      test[this.Labels.at(i).get('Name').value] = this.Labels.at(i).get(
        'Value'
      ).value;
      i++;
    }

    return test;
  }
  get Name() {
    return this.networkForm.get('Name');
  }

  get driver() {
    return this.networkForm.get('Name');
  }

  get Ingress() {
    return this.networkForm.controls['checkBokes'].value.Ingress;
  }

  get Options() {
    return this.networkForm.get('Options') as FormArray;
  }

  get Labels() {
    return this.networkForm.get('Labels') as FormArray;
  }

  initLabels() {
    return this.fb.group({
      Name: ['', Validators.required],
      Value: [''],
    });
  }

  initOptions() {
    return this.fb.group({
      OptionName: ['', Validators.required],
      Value: [''],
    });
  }

  addOption() {
    const control = <FormArray>this.networkForm.controls['Options'];
    control.push(this.initOptions());
  }

  removeOption(i: number) {
    const control = <FormArray>this.networkForm.controls['Options'];
    control.removeAt(i);
  }

  addLabel() {
    const control = <FormArray>this.networkForm.controls['Labels'];
    control.push(this.initLabels());
  }

  removeLabel(i: number) {
    const control = <FormArray>this.networkForm.controls['Labels'];
    control.removeAt(i);
  }

  ShowOptionName() {
   return (this.Options.length > 0);
  }
}
