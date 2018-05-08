import { Injectable } from '@angular/core';
import {ConfigurationService} from '..';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError, map} from 'rxjs/operators';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {ServiceError} from '../services/services.service';
import {TokenStorage} from '../../_classes';

export enum AuthError {
  AUTH_OK,
  AUTH_ERR
}

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private config: ConfigurationService, private token: TokenStorage) { }

  public getToken(username: string, password: string): Observable<AuthError> {
      return this.http.post(this.config.getAPIHostname() + '/auth/token', {username: username, password: password}, {responseType: 'json'})
          .pipe(map(x => {
                  if (x['jwt'] === null) {
                    return ErrorObservable.create(AuthError.AUTH_ERR);
                  }
                  this.token.saveToken('auth', x['jwt']);
                  return AuthError.AUTH_OK;
              }), catchError((err: HttpErrorResponse) => {
                  return ErrorObservable.create(AuthError.AUTH_ERR);
              })
          );
  }
}
