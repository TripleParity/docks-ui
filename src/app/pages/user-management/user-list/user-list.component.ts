import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

import {
  UserService,
  UserErrorCode,
  UserError,
} from '../../../services/user-management/user.service';
import { User } from '../../../models/user-management/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  // Alert message flags. Displays if value not empty or false
  genericError = false;

  updatedUser = '';
  updatedUserNotFound = '';

  activeModal: NgbModalRef;

  selected: User[] = [];

  users: User[]; // rows

  columns = [{ prop: 'username' }];
  usernameToDelete = '';

  dataCache = [];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {
    this.route.paramMap.subscribe((params: ParamMap) => {});
  }

  fetchUsers() {
    this.userService.getUsers().subscribe(
      (users: User[]) => {
        this.users = users;
        this.dataCache = [...users];
      },
      (err: UserError) => {
        this.toastr.error(err.message, 'An error occured');
      }
    );
  }

  ngOnInit() {
    this.fetchUsers();
  }

  open(content, username: string) {
    this.usernameToDelete = username;
    console.log(content);

    this.activeModal = this.modalService.open(content);
  }

  deleteUser(username: string) {
    this.userService.deleteUser(username).subscribe(
      (result: UserErrorCode) => {
        if (result === UserErrorCode.REQUEST_OK) {
          this.toastr.success('User ' + username + ' removed.', 'Success!');
        } else {
          this.toastr.error('Something went wrong...', 'An error occured!');
        }

        this.activeModal.close();
        this.fetchUsers();
      },
      (err: UserError) => {
        this.toastr.error(err.message, 'Could not delete user');
        if (err.code === UserErrorCode.REQUEST_ERR_NOT_FOUND) {
          this.toastr.error('Could not find user', 'An error occured!');
        } else {
          this.toastr.error('Something went wrong...', 'An error occured!');
        }

        this.activeModal.close();
        this.fetchUsers();
      }
    );
  }

  // TODO(devosray): Auto-rerender table when status change was successfull?
  updateUserTwoFactorStatus(username: string, status: boolean) {
    this.userService.updateUserTwoFactorStatus(username, status).subscribe(
      (result: UserError) => {
        if (result.code === UserErrorCode.REQUEST_OK) {
          this.toastr.success(
            'Updated Two-Factor authentication status for ' + username + '.',
            'Success!'
          );
        } else {
          this.toastr.error('Something went wrong...', 'An error occured!');
        }

        this.fetchUsers();
      },
      (err: UserError) => {
        this.toastr.error(
          err.message,
          "Could not update user's two-factor authentication status"
        );
        if (err.code === UserErrorCode.REQUEST_ERR_NOT_FOUND) {
          this.toastr.error('Could not find user', 'An error occured!');
        } else {
          this.toastr.error('Something went wrong...', 'An error occured!');
        }

        this.fetchUsers();
      }
    );
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.dataCache.filter((user: User) => {
      return user.username.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.users = temp;

    // TODO(egeldenhuys): Whenever the filter changes, always go back to the first page
  }
}
