import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  UserService,
  UserStatusCode,
} from '../../../services/user-management/user.service';
import { User } from '../../../models/user-management/user.model';

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
  passwordHolder2 = '';

  submitted = false;
  badUser = '';

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
        (result: UserStatusCode) => {
          this.submitted = false;
          this.router.navigate([
            '/users',
            { createdUser: this.model.username },
          ]);
        },
        (err: UserStatusCode) => {
          console.error(err);
          if (err === UserStatusCode.CREATE_ERR_EXISTS) {
            this.alreadyExists = true;
            this.badUser = this.model.username;
          } else {
            this.genericError = true;
          }

          this.submitted = false;
        }
      );
  }
}
