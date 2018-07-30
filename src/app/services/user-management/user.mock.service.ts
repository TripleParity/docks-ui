import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user-management/user.model';

export enum CreateUserStatus {
  CREATE_OK,
  CREATE_ERR_EXISTS,
  CREATE_ERR_SERVER,
}

export enum UpdateUserStatus {
  UPDATE_OK,
  UPDATE_ERR_NOT_FOUND,
  UPDATE_ERR_SERVER,
}

export enum DeleteUserStatus {
  DELETE_OK,
  DELETE_ERR_NOT_FOUND,
  DELETE_ERR_SERVER,
}

@Injectable()
export class UserService {
  constructor() {}

  getUsers(): Observable<User[]> {
    return null;
  }

  createUser(username: string, password: string): Observable<CreateUserStatus> {
    return null;
  }

  // TODO(egeldenhuys): Update using model
  updateUser(username: string, password: string) {
    return null;
  }

  deleteUser(username: string) {
    return null;
  }
}
