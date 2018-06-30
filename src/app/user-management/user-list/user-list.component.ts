import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/user-management/shared/user.service';
import { User } from 'app/user-management/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  selected: User[] = [];

  users: User[];

  columns = [
    {prop: 'username'}
  ];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
}
}
