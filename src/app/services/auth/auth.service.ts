import { Injectable } from '@angular/core';
import { ConfigurationService } from '../../services/configuration/configuration.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { TokenStorage } from '../../classes/tokenstorage/tokenstorage';
import { JwtHelper } from 'angular2-jwt';
import { BehaviorSubject } from '../../../../node_modules/rxjs';

export enum AuthError {
  AUTH_OK,
  AUTH_ERR, // Unknown error
  AUTH_ERR_CREDENTIALS, // Bad username/password
  AUTH_ERR_SERVER, // Server unreachable
}

const jwtKey = 'auth';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private config: ConfigurationService,
    private token: TokenStorage
  ) {}

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLogged() {
    return this.loggedIn.asObservable();
  }

  public getToken(username: string, password: string): Observable<AuthError> {
    return this.http
      .post(
        this.config.getAPIHostname() + '/api/auth/token',
        { username: username, password: password },
        {
          responseType: 'json',
        }
      )
      .pipe(
        map(body => {
          if (body['jwt'] === null) {
            console.error(body);
            return ErrorObservable.create(AuthError.AUTH_ERR);
          }

          this.token.saveToken(jwtKey, body['jwt']);
          this.loggedIn.next(true);
          return AuthError.AUTH_OK;
        }),
        catchError((err: HttpErrorResponse) => {
          console.error(err);

          if (err.status === 0) {
            return ErrorObservable.create(AuthError.AUTH_ERR_SERVER);
          } else if (err.status === 401) {
            return ErrorObservable.create(AuthError.AUTH_ERR_CREDENTIALS);
          } else {
            return ErrorObservable.create(AuthError.AUTH_ERR);
          }
        })
      );
  }

  public isLoggedIn(): boolean {
    const jwtRaw = this.token.getToken(jwtKey);

    if (jwtRaw === null) {
      return false;
    } else {
      const helper = new JwtHelper();
      this.loggedIn.next(true);
      return !helper.isTokenExpired(jwtRaw);
    }
  }

  public logout() {
    this.token.signOut();
    this.loggedIn.next(false);
  }
}
