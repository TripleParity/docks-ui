import { Component, OnInit } from '@angular/core';
import { NetworkSending, Network } from 'app/models/network/network.model';
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
  public networkModel: NetworkSending;

  constructor(
    private router: Router,
    private networkService: NetworkService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

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

    const networkModel: NetworkSending = {
      Name: this.networkForm.get('Name').value,
      Ingress: this.networkForm.controls['checkBoxes'].value.Ingress,
      Attachable: this.networkForm.controls['checkBoxes'].value.IsAttachable,
      EnableIPv6: this.networkForm.controls['checkBoxes'].value.EnableIPv6,
      Internal: this.networkForm.controls['checkBoxes'].value.Internal,
      Driver: this.networkForm.get('Driver').value,
      Options: this.convertOptions(),
      IPAM : {Config: [
        {Subnet: this.networkForm.get('Subnet').value,
        Gateway: this.networkForm.get('GateWay').value }
      ]},
      Labels: this.convertLabels()
    };

    if (this.networkForm.get('Driver').value.length === 0) {
      delete networkModel.Driver;
    }
    if (this.networkForm.get('Subnet').value.length === 0 || this.networkForm.get('Gateway').value.length === 0 ) {
      delete networkModel.IPAM;
    }
    if (this.convertOptions.length === 0) {
      delete networkModel.Options;
    }
    if (this.convertLabels.length === 0) {
      delete networkModel.Labels;
    }

    this.networkService.createNetwork(networkModel).subscribe(
      (result: Network) => {
        this.toastr.success(
          'Network ' + this.networkForm.get('Name').value + ' created!',
          'Success!'
        );
        this.router.navigate(['/networks']);
      },
      (err: NetworkError) => {
        this.toastr.error(err.message, 'Could not create network');
      }
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
    return this.networkForm.controls['checkBoxes'].value.Ingress;
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

  ShowLabelName() {
    return this.Labels.length > 0;
  }
}
