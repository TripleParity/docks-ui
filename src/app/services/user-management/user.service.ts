import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import { ApiResponse } from '../../models/api-respone/api-response.model';
import { User } from '../../models/user-management/user.model';
import { ConfigurationService } from '../configuration/configuration.service';
import { map, catchError } from 'rxjs/operators';

export enum UserStatusCode {
  REQUEST_OK = 200,
  CREATE_ERR_EXISTS = 409,
  REQUEST_ERR_NOT_FOUND = 404,
  REQUEST_ERR_SERVER = 500,
}

export interface UserError {
  code: UserStatusCode;
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
          observer.error(err);
        }
      );
    });
  }

  // createUser(username: string, password: string): Observable<string> {
  //   return this.httpClient
  //     .post(this.userEndpoint, { username: username, password: password })
  //     .pipe(
  //       map((x) => {
  //         const observer = new Observable<UserStatusCode>();
  //         return observer;
  //       }),
  //       catchError((err: HttpErrorResponse) => {
  //         return ErrorObservable.create({
  //           code: <UserStatusCode>err.status,
  //           message: err.error['message'],
  //         });
  //    })
  //   );
  // }

  createUser(username: string, password: string): Observable<UserStatusCode> {
    return new Observable<UserStatusCode>((observer) => {
      this.httpClient
        .post(this.userEndpoint, { username: username, password: password })
        .subscribe(
          (body) => {
            observer.next(UserStatusCode.REQUEST_OK);
          },
          (err: HttpErrorResponse) => {
            console.error(err);
            return ErrorObservable.create({
              code: <UserStatusCode>err.status,
              message: err.error['message'],
            });
          }
        );
    });
  }

  // TODO(egeldenhuys): Update using model
  updateUser(username: string, password: string) {
    return new Observable<UserStatusCode>((observer) => {
      this.httpClient
        .put(this.userEndpoint + '/' + username, { password: password })
        .subscribe(
          (body) => {
            observer.next(UserStatusCode.REQUEST_OK);
          },
          (err: HttpErrorResponse) => {
            console.error(err);
            if (err.status === 404) {
              observer.error(UserStatusCode.REQUEST_ERR_NOT_FOUND);
            } else {
              observer.error(UserStatusCode.REQUEST_ERR_SERVER);
            }
          }
        );
    });
  }

  deleteUser(username: string) {
    return new Observable<UserStatusCode>((observer) => {
      this.httpClient.delete(this.userEndpoint + '/' + username).subscribe(
        (body) => {
          observer.next(UserStatusCode.REQUEST_OK);
        },
        (err: HttpErrorResponse) => {
          console.error(err);

          if (err.status === 404) {
            observer.error(UserStatusCode.REQUEST_ERR_NOT_FOUND);
          } else {
            observer.error(UserStatusCode.REQUEST_ERR_SERVER);
          }
        }
      );
    });
  }
}
