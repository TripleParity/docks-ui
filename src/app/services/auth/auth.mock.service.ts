/**
 * Handles authentication with the backend; In particular docks-api
 *
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export enum AuthError {
  AUTH_OK,
  AUTH_ERR, // Unknown error
  AUTH_ERR_CREDENTIALS, // Bad username/password
  AUTH_ERR_SERVER, // Server unreachable
}

@Injectable()
export class AuthMockService {
  constructor() {}

  /**
   * Used to get a token from docks-api
   *
   * @param {string} username
   * @param {string} password
   * @returns {Observable<AuthError>}
   */
  public getToken(username: string, password: string): Observable<AuthError> {
    return null;
  }

  /**
   * Determines whether the token is valid or not.
   *
   * @returns {boolean}
   */
  public isLoggedIn(): boolean {
    return null;
  }

  public logout() {}
}
