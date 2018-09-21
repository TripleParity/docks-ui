import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import { ApiResponse } from '../../models/api-respone/api-response.model';
import { User } from '../../models/user-management/user.model';
import { ConfigurationService } from '../configuration/configuration.service';
import { map, catchError } from 'rxjs/operators';

export enum UserErrorCode {
  REQUEST_OK = 200,
  CREATE_ERR_EXISTS = 409,
  REQUEST_ERR_NOT_FOUND = 404,
  REQUEST_ERR_SERVER = 500,
}

function code_to_message(code: UserErrorCode): string {
  switch (code) {
    case UserErrorCode.CREATE_ERR_EXISTS: {
      return 'User already exists!';
    }
    case UserErrorCode.REQUEST_ERR_NOT_FOUND: {
      return 'User not found.';
    }
    case UserErrorCode.REQUEST_ERR_SERVER: {
      return 'Something went wrong (Server 500)';
    }
  }
}

export interface UserError {
  code: UserErrorCode;
  message: string;
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
          observer.error({
            code: <UserErrorCode>err.status,
            message: code_to_message(err.status),
          });
        }
      );
    });
  }

  createUser(username: string, password: string): Observable<UserError> {
    return this.httpClient
      .post(this.userEndpoint, { username: username, password: password })
      .pipe(
        map((x) => {
          return ErrorObservable.create({
            code: UserErrorCode.REQUEST_OK,
            message: 'User created!',
          });
        }),
        catchError((err: HttpErrorResponse) => {
          return ErrorObservable.create({
            code: err.status,
            message: code_to_message(err.status),
          });
        })
      );
  }

  // TODO(egeldenhuys): Update using model
  updateUser(username: string, password: string) {
    return new Observable<UserError>((observer) => {
      this.httpClient
        .put(this.userEndpoint + '/' + username, { password: password })
        .subscribe(
          (body) => {
            observer.next({
              code: UserErrorCode.REQUEST_OK,
              message: 'User created!',
            });
          },
          (err: HttpErrorResponse) => {
            console.error(err);
            if (err.status === 404) {
              observer.error({
                code: UserErrorCode.REQUEST_ERR_NOT_FOUND,
                message: code_to_message(err.status),
              });
            } else {
              observer.error({
                code: UserErrorCode.REQUEST_ERR_NOT_FOUND,
                message: code_to_message(err.status),
              });
            }
          }
        );
    });
  }

  deleteUser(username: string) {
    return new Observable<UserErrorCode>((observer) => {
      this.httpClient.delete(this.userEndpoint + '/' + username).subscribe(
        (body) => {
          observer.next(UserErrorCode.REQUEST_OK);
        },
        (err: HttpErrorResponse) => {
          console.error(err);

          if (err.status === 404) {
            observer.error({
              code: UserErrorCode.REQUEST_ERR_NOT_FOUND,
              message: code_to_message(err.status),
            });
          } else {
            observer.error({
              code: UserErrorCode.REQUEST_ERR_SERVER,
              message: code_to_message(err.status),
            });
          }
        }
      );
    });
  }

  updateUserTwoFactorStatus(username: string, status: boolean) {
    return new Observable<UserError>((observer) => {
      this.httpClient
        .put(this.userEndpoint + '/' + username + '/2fa', { status: status })
        .subscribe(
          (body) => {
            observer.next({
              code: UserErrorCode.REQUEST_OK,
              message: 'Two-Factor status updated!',
            });
          },
          (err: HttpErrorResponse) => {
            console.error(err);
            if (err.status === 404) {
              observer.error({
                code: UserErrorCode.REQUEST_ERR_NOT_FOUND,
                message: code_to_message(err.status),
              });
            } else {
              observer.error({
                code: UserErrorCode.REQUEST_ERR_NOT_FOUND,
                message: code_to_message(err.status),
              });
            }
          }
        );
    });
  }
}
