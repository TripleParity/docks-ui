import { Component, OnInit } from '@angular/core';
import {
  UserService,
  CreateUserStatus,
} from 'app/user-management/shared/user.service';

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

  constructor(private userService: UserService) {}

  ngOnInit() {}

  submit(username: string, password: string) {
    this.alreadyExists = false;
    this.genericError = false;

    username.length === 0
      ? (this.usernamePopulated = false)
      : (this.usernamePopulated = true);
    password.length === 0
      ? (this.passwordPopulated = false)
      : (this.passwordPopulated = true);

    if (!this.passwordPopulated || !this.usernamePopulated) {
      return;
    }

    console.log(username + ' / ' + password);

    this.userService.createUser(username, password).subscribe(
      (result: CreateUserStatus) => {
        console.log('Succ');
        console.log(result);
      },
      (err: CreateUserStatus) => {
        if (err === CreateUserStatus.CREATE_ERR_EXISTS) {
          this.alreadyExists = true;
        } else if (err === CreateUserStatus.CREATE_ERR_SERVER) {
          this.genericError = true;
        }
        console.log('ERROR');
        console.log(err);
      }
    );
  }
}
