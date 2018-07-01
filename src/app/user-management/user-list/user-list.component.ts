import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { UserService } from 'app/user-management/shared/user.service';
import { User } from 'app/user-management/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  // Message flags
  createdUser = '';
  updatedUser = '';
  updatedUserNotFound = '';
  genericError = false;

  selected: User[] = [];

  users: User[];

  columns = [{ prop: 'username' }];

  constructor(private userService: UserService, private route: ActivatedRoute) {
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

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (users: User[]) => {
        this.users = users;
      },
      (err) => {
        console.error(err);
        this.genericError = true;
      }
    );
  }

  onSelect({ selected }) {
    // console.log('Select Event', selected, this.selected);
  }

  onActivate(event) {
    // console.log('Activate Event', event);
  }
}
