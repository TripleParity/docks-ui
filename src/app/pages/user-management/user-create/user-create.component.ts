import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService, UserErrorCode, UserError } from '../../../services/user-management/user.service';
import { User } from '../../../models/user-management/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent implements OnInit {
  usernamePopulated = true;
  passwordPopulated = true;
  passwordHolder2 = '';
  badUser = '';

  model: User = null;

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
    ) {
    this.model = {
      username: '',
      password: '',
    };
  }

  ngOnInit() {}

  submit() {
    this.userService
      .createUser(this.model.username, this.model.password)
      .subscribe(
        (result: UserError) => {
          this.toastr.success('User ' + this.model.username + ' created!', 'Success!');
          this.router.navigate(['/users']);
        },
        (err: UserError) => {
          this.toastr.error(err.message, 'Could not create user');
        }
      );
  }
}
