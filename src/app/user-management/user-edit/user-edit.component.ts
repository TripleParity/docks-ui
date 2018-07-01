import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {
  UserService,
  UpdateUserStatus,
} from 'app/user-management/shared/user.service';
import { User } from 'app/user-management/models/user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  userForm: FormGroup;
  genericError = false;
  doublePassword: ValidatorFn = null;
  submitted: boolean;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
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

  submit() {
    const formModel = this.userForm.value;

    const user: User = {
      username: formModel.username,
      password: formModel.password,
    };

    this.userService.updateUser(user.username, user.password).subscribe(
      (result) => {
        this.submitted = false;
        this.router.navigate(['/users', { updatedUser: user.username }]);
      },
      (err) => {
        this.submitted = false;
        if (err === UpdateUserStatus.UPDATE_ERR_NOT_FOUND) {
          this.router.navigate([
            '/users',
            { updatedUserNotFound: user.username },
          ]);
        } else {
          this.genericError = true;
        }
      }
    );
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
