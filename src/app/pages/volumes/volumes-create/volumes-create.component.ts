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
      this.initOptions()
    ])
  });

  get Options() {
    return this.volumeForm.get('Options') as FormArray;
  }


  initOptions() {
    console.log('Setting the array');
    return this.fb.group({
      Name: ['', Validators.required],
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
  }

  addOption() {
    console.log('hello?');
    const control = <FormArray>this.volumeForm.controls['Options'];
    control.push(this.initOptions());
  }

  removeOption(i: number) {
    // remove address from the list
    const control = <FormArray>this.volumeForm.controls['Options'];
    control.removeAt(i);
}

}


