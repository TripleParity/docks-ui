import { Injectable } from '@angular/core';
import { ConfigurationService } from '..';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { TokenStorage } from '../../_classes';
import { JwtHelper } from 'angular2-jwt';

export enum AuthError {
  AUTH_OK = 0,
  AUTH_ERR
}

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private config: ConfigurationService,
    private token: TokenStorage
  ) {}

  public getToken(username: string, password: string): Observable<AuthError> {
    console.log('getToken()');
    return this.http
      .post(
        this.config.getAPIHostname() + '/api/auth/token',
        { username: username, password: password },
        { responseType: 'json' }
      )
      .pipe(
        map(x => {
          if (x['jwt'] === null) {
            console.log(x);
            return ErrorObservable.create(AuthError.AUTH_ERR);
          }
          this.token.saveToken('auth', x['jwt']);
          return AuthError.AUTH_OK;
        }),
        catchError((err: HttpErrorResponse) => {
          console.log(err);
          return ErrorObservable.create(AuthError.AUTH_ERR);
        })
      );
  }

  public isLoggedIn(): boolean {
    // TODO(egeldenhuys): Store token key in constant
    const jwtRaw = this.token.getToken('auth');

    if (jwtRaw === null) {
      return false;
    } else {
      const helper = new JwtHelper();
      return !helper.isTokenExpired(jwtRaw);
    }
  }

  public logout() {
    this.token.signOut();
  }
}
