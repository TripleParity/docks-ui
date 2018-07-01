import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { UserService } from 'app/user-management/shared/user.service';
import { User } from 'app/user-management/models/user.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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
  closeResult = '';

  selected: User[] = [];

  users: User[];

  columns = [{ prop: 'username' }];
  usernameToDelete = '';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private modalService: NgbModal
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

  open(content, username: string) {
    this.usernameToDelete = username;

    this.modalService.open(content).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
