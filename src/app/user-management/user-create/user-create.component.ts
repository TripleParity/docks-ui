import { Component, OnInit } from '@angular/core';
import {
  UserService,
  CreateUserStatus,
} from 'app/user-management/shared/user.service';
import { User } from 'app/user-management/models/user.model';
import { ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent implements OnInit {
  usernamePopulated = true;
  passwordPopulated = true;

  alreadyExists = false;
  genericError = false;

  submitted = false;

  model: User = null;

  constructor(private userService: UserService, private router: Router) {
    this.model = {
      username: '',
      password: '',
    };
  }

  ngOnInit() {}

  submit() {
    this.alreadyExists = false;
    this.genericError = false;
    this.submitted = true;

    this.userService
      .createUser(this.model.username, this.model.password)
      .subscribe(
        (result: CreateUserStatus) => {
          this.submitted = false;
          this.router.navigate(['/users', { createdUser: this.model.username}]);
        },
        (err: CreateUserStatus) => {
          if (err === CreateUserStatus.CREATE_ERR_EXISTS) {
            this.alreadyExists = true;
          } else if (err === CreateUserStatus.CREATE_ERR_SERVER) {
            this.genericError = true;
          }

          this.submitted = false;
          console.log(err);
        }
      );
  }
}
