import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from 'app/user-management/models/user.model';
import { ConfigurationService } from 'app/_services';
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { ApiResponse } from 'app/user-management/models/api-response.model';
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators';

export enum CreateUserStatus {
  CREATE_OK,
  CREATE_ERR_EXISTS,
  CREATE_ERR_SERVER,
}

export enum UpdateUserStatus {
  UPDATE_OK,
  UPDATE_ERR_NOT_FOUND,
  UPDATE_ERR_SERVER
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
            console.log(body);
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
      this.httpClient.put(this.userEndpoint, {username: username, password: password})
      .subscribe(
        (body) => {
          console.log(body);
          observer.next(UpdateUserStatus.UPDATE_OK);
        },
        (err: HttpErrorResponse) => {
          console.error(err);
          if (err.status === 404) {
            observer.next(UpdateUserStatus.UPDATE_ERR_NOT_FOUND);
          } else {
            observer.next(UpdateUserStatus.UPDATE_ERR_SERVER);
          }
        }
      );
    });
  }
}
