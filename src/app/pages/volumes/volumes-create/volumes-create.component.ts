import { Component, OnInit } from '@angular/core';
import { Volume } from 'app/models/volume/volume.model';
import { Router } from '@angular/router';
import { VolumeService } from 'services/volume/volume.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-volumes-create',
  templateUrl: './volumes-create.component.html',
  styleUrls: ['./volumes-create.component.css'],
})
export class VolumesCreateComponent implements OnInit {

  public volumeModel: Volume;
  public alreadyExists = false;
  public genericError = false;
  public submitted = false;
  public warning = false;
  public fileText = '';
  public badUser = '';
  public warningMessage = 'Something went wrong...';
  // TODO: Paul Wood allow an unknown number of Options to be added dynamically, achieved using the formBuilder

  volumeForm = this.fb.group({
    Name: ['', Validators.required],
    Driver: ['', Validators.required],
    Options: this.fb.array([
      // this.initOptions()
    ]),
    Labels: this.fb.array([
      // this.initLabels();
    ])
  });


  initLabels() {
    return this.fb.group({
      Name: ['', Validators.required],
      Value: ['']
    });
  }

  initOptions() {
    return this.fb.group({
      OptionName: ['', Validators.required],
      Value: ['']
    });
  }

  constructor(private router: Router, private volumeService: VolumeService, private fb: FormBuilder) {
    this.volumeModel = {
      Name: '',
      Driver: '',
    };
  }

  ngOnInit() {
  }

  submit() {
    console.log('Submit is working');

    this.volumeModel.Name = this.volumeForm.get('Name').value;
    this.volumeModel.Driver = this.volumeForm.get('Driver').value;
    this.volumeModel.Options = this.volumeForm.get('Options').value;
    this.volumeModel.Labels = this.volumeForm.get('Labels').value;

    console.log(this.volumeModel);
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
}


