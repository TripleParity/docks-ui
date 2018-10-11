import { Component, OnInit } from '@angular/core';
import { Volume } from 'app/models/volume/volume.model';
import { Router } from '@angular/router';
import { VolumeService, VolumeError } from 'services/volume/volume.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-volumes-create',
  templateUrl: './volumes-create.component.html',
  styleUrls: ['./volumes-create.component.css'],
})
export class VolumesCreateComponent implements OnInit {
  public volumeModel: Volume;

  public fileText = '';
  public badUser = '';
  // TODO: Paul Wood allow an unknown number of Options to be added dynamically, achieved using the formBuilder

  volumeForm: FormGroup = this.fb.group({
    Name: ['', Validators.required],
    Driver: ['', Validators.required],
    Options: this.fb.array([
      // this.initOptions()
    ]),
    Labels: this.fb.array([
      // this.initLabels();
    ]),
  });

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

  constructor(
    private router: Router,
    private volumeService: VolumeService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.volumeModel = {
      Name: '',
      Driver: '',
    };
  }

  ngOnInit() {}

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

  submit() {
    this.volumeModel.Name = this.volumeForm.get('Name').value;
    this.volumeModel.Driver = this.volumeForm.get('Driver').value;

    this.volumeModel.DriverOpts = this.convertOptions();

    this.volumeModel.Labels = this.convertLabels();

    this.volumeService.createVolume(this.volumeModel).subscribe(
      (result: Volume) => {
        this.toastr.success(
          'Volume ' + this.volumeForm.get('Name').value + ' created!',
          'Success!'
        );
        this.router.navigate(['/volumes']);
      },
      (err: VolumeError) => {
        this.toastr.error(err.message, 'Could not create volume');
      }
    );
  }

  addOption() {
    const control = <FormArray>this.volumeForm.controls['Options'];
    control.push(this.initOptions());
  }

  removeOption(i: number) {
    const control = <FormArray>this.volumeForm.controls['Options'];
    control.removeAt(i);
  }

  addLabel() {
    const control = <FormArray>this.volumeForm.controls['Labels'];
    control.push(this.initLabels());
  }

  removeLabel(i: number) {
    const control = <FormArray>this.volumeForm.controls['Labels'];
    control.removeAt(i);
  }

  get Name() {
    return this.volumeForm.get('Name');
  }

  get Driver() {
    return this.volumeForm.get('Driver');
  }

  get Options() {
    return this.volumeForm.get('Options') as FormArray;
  }

  get Labels() {
    return this.volumeForm.get('Labels') as FormArray;
  }

  ShowOptionName() {
    return this.Options.length > 0;
  }

  ShowLabelName() {
    return this.Labels.length > 0;
  }
}
