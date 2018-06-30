import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  userForm: FormGroup;

  doublePassword: ValidatorFn = null;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.doublePassword = (control: FormGroup): ValidationErrors | null => {
      const p1 = control.get('password');
      const p2 = control.get('password2');

      return p1 && p2 && p1.value !== p2.value
        ? { passwordsDoNotMatch: true }
        : null;
    };

    this.createForm();
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log(params.get('username'));

      this.userForm.setValue({
        username: params.get('username'),
        password: '',
        password2: '',
      });
    });
  }

  createForm() {
    this.userForm = this.formBuilder.group(
      {
        username: '',
        password: ['', Validators.required],
        password2: '',
      },
      { validator: this.doublePassword }
    );
  }

  get password() {
    return this.userForm.get('password');
  }

  get password2() {
    return this.userForm.get('password2');
  }
}
