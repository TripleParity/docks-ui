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

  createdUser = '';

  updatedUser = '';
  updatedUserNotFound = '';

  activeModal: NgbModalRef;

  deletedUser = '';
  deletedUserNotFound = '';

  selected: User[] = [];

  users: User[]; // rows

  columns = [{ prop: 'username' }];
  usernameToDelete = '';

  dataCache = [];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private toastr: ToastrService,
  ) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.has('createdUser')) {
        this.createdUser = params.get('createdUser');
      }

      if (params.has('updatedUser')) {
        this.updatedUser = params.get('updatedUser');
      }

      if (params.has('updatedUserNotFound')) {
        this.updatedUserNotFound = params.get('updatedUserNotFound');
      }
    });
  }

  fetchUsers() {
    this.userService.getUsers().subscribe(
      (users: User[]) => {
        this.users = users;
        this.dataCache = [...users];
      },
      (err: UserError) => {
        this.toastr.error(err.message, 'An error occured');
        this.genericError = true;
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
        this.clearAlerts();
        if (result === UserErrorCode.REQUEST_OK) {
          this.deletedUser = username;
        } else {
          this.genericError = true;
        }

        this.activeModal.close();
        this.fetchUsers();
      },
      (err: UserError) => {
        this.toastr.error(err.message, 'Could not delete user');
        this.clearAlerts();
        if (err.code === UserErrorCode.REQUEST_ERR_NOT_FOUND) {
          this.deletedUserNotFound = username;
        } else {
          this.genericError = true;
        }

        this.activeModal.close();
        this.fetchUsers();
      }
    );
  }

  clearAlerts() {
    this.createdUser = '';
    this.deletedUser = '';
    this.deletedUserNotFound = '';
    this.genericError = false;
    this.updatedUser = '';
    this.updatedUserNotFound = '';
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
