import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ApiResponse } from 'app/user-management/models/api-response.model';
import { User } from 'app/user-management/models/user.model';
import { ConfigurationService } from 'app/_services';

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
  private userEndpoint = null;

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigurationService
  ) {
    this.userEndpoint = configService.getAPIHostname() + '/users';
  }

  getUsers(): Observable<User[]> {
    return new Observable<User[]>((observer) => {
      this.httpClient.get<ApiResponse>(this.userEndpoint).subscribe(
        (res) => {
          // Unwrap the response
          observer.next(res.data);
        },
        (err) => {
          console.error(err);
          observer.error(err);
        }
      );
    });
  }

  createUser(username: string, password: string): Observable<CreateUserStatus> {
    return new Observable<CreateUserStatus>((observer) => {
      this.httpClient
        .post(this.userEndpoint, { username: username, password: password })
        .subscribe(
          (body) => {
            observer.next(CreateUserStatus.CREATE_OK);
          },
          (err: HttpErrorResponse) => {
            console.error(err);
            if (err.status === 409) {
              observer.error(CreateUserStatus.CREATE_ERR_EXISTS);
            } else {
              observer.error(CreateUserStatus.CREATE_ERR_SERVER);
            }
          }
        );
    });
  }

  // TODO(egeldenhuys): Update using model
  updateUser(username: string, password: string) {
    return new Observable<UpdateUserStatus>((observer) => {
      this.httpClient
        .put(this.userEndpoint + '/' + username, { password: password })
        .subscribe(
          (body) => {
            observer.next(UpdateUserStatus.UPDATE_OK);
          },
          (err: HttpErrorResponse) => {
            console.error(err);
            if (err.status === 404) {
              observer.error(UpdateUserStatus.UPDATE_ERR_NOT_FOUND);
            } else {
              observer.error(UpdateUserStatus.UPDATE_ERR_SERVER);
            }
          }
        );
    });
  }

  deleteUser(username: string) {
    return new Observable<DeleteUserStatus>((observer) => {
      this.httpClient.delete(this.userEndpoint + '/' + username).subscribe(
        (body) => {
          observer.next(DeleteUserStatus.DELETE_OK);
        },
        (err: HttpErrorResponse) => {
          console.error(err);

          if (err.status === 404) {
            observer.error(DeleteUserStatus.DELETE_ERR_NOT_FOUND);
          } else {
            observer.error(DeleteUserStatus.DELETE_ERR_SERVER);
          }
        }
      );
    });
  }
}
