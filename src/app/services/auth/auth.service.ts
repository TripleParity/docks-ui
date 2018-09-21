/**
 * Handles authentication with the backend; In particular docks-api
 *
 */
import { Injectable } from '@angular/core';
import { ConfigurationService } from 'services/configuration/configuration.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { TokenStorage } from 'app/classes/tokenstorage/tokenstorage';
import { JwtHelper } from 'angular2-jwt';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export enum AuthError {
  AUTH_OK,
  AUTH_ERR, // Unknown error
  AUTH_ERR_CREDENTIALS, // Bad username/password
  AUTH_ERR_SERVER, // Server unreachable
  AUTH_ERR_INITIAL_TWO_FACTOR_TOKEN, // The two-factor token barcode still has to be shown
}

export interface QRReturn {
  qrImageData: string;
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

  /**
   * Used to get a token from docks-api
   *
   * @param {string} username
   * @param {string} password
   * @param {string} token
   * @returns {Observable<AuthError>}
   */
  public getToken(username: string, password: string, token: string): Observable<AuthError> {
    return this.http
      .post(
        this.config.getAPIHostname() + '/api/auth/token',
        { username: username, password: password, token: token },
        {
          responseType: 'json',
        }
      )
      .pipe(
        map((body) => {
          if (body['jwt'] === null) {
            return ErrorObservable.create(AuthError.AUTH_ERR);
          }

          this.token.saveToken(jwtKey, body['jwt']);
          this.loggedIn.next(true);
          return AuthError.AUTH_OK;
        }),
        catchError((err: HttpErrorResponse) => {
          if (err.status === 0) {
            return ErrorObservable.create(AuthError.AUTH_ERR_SERVER);
          } else if (err.status === 401) {
            return ErrorObservable.create(AuthError.AUTH_ERR_CREDENTIALS);
          } else if (err.status === 402) {
            return ErrorObservable.create(AuthError.AUTH_ERR_INITIAL_TWO_FACTOR_TOKEN);
          } else {
            return ErrorObservable.create(AuthError.AUTH_ERR);
          }
        })
      );
  }

  /**
   * Determines whether the token is valid or not.
   *
   * @returns {boolean}
   */
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

    /**
   * Used to get a token from docks-api
   *
   * @param {string} username
   * @param {string} password
   * @returns {Observable<AuthError>}
   */
  public getQRCode(username: string, password: string): Observable<QRReturn> {
    return this.http
      .post(
        this.config.getAPIHostname() + '/api/auth/qr',
        { username: username, password: password},
        {
          responseType: 'json',
        }
      )
      .pipe(
        map((body) => {
          if (body['qr'] === null) {
            return <QRReturn> {qrImageData: ''};
          }
          return <QRReturn> {qrImageData: body['qr']};
        }),
        catchError((err: HttpErrorResponse) => {
          return ErrorObservable.create(AuthError.AUTH_ERR);
        })
      );
  }
}
