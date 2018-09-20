import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, map } from 'rxjs/operators';
import { Stack } from 'app/models/stack/stack.model';
import { Observable } from 'rxjs/Observable';
import { ConfigurationService } from 'services/configuration/configuration.service';

export enum StackErrorCode {
  ERR_OK = 200,
  ERR_STACK_NAME_TAKEN = 409,
  ERR_STACK_MISSING = 404, // sigh
}

// Compound structure
export interface StackError {
  code: StackErrorCode;
  message: string;
}

@Injectable()
export class StackService {
  constructor(private http: HttpClient, private config: ConfigurationService) {}

  /**
   * Returns a list of stacks from the docks-api
   *
   * @returns {Observable<Stack>}
   */
  public getStacks(): Observable<Stack[]> {
    return this.http
      .get(this.config.getAPIHostname() + '/stacks', {
        responseType: 'json',
      })
      .pipe(
        map((x) => {
          return <Stack[]>x['data'];
        }),
        catchError((err: HttpErrorResponse) => {
          return ErrorObservable.create({
            code: <StackErrorCode>err.status,
            message: err.error,
          });
        })
      );
  }

  /**
   * Creates a new stack.
   *
   * Note that the _64params field is a base64 encoded file.
   * @returns {Observable<StackError>}
   */
  public deployStack(name: string, _64params: string): Observable<StackError> {
    return this.http
      .post(
        this.config.getAPIHostname() + '/stacks',
        { stackName: name, stackFile: _64params },
        { responseType: 'text' }
      )
      .pipe(
        map((x) => {
          return {
            code: StackErrorCode.ERR_OK,
            message: 'Stack deployed!',
          };
        }),
        catchError((err: HttpErrorResponse) => {
          return ErrorObservable.create({
            code: <StackErrorCode>err.status,
            message: err.error,
          });
        })
      );
  }

  /**
   * Returns a list of tasks associated with the stack.
   *
   * @param {string} stack
   * @returns {Observable<JSON>}
   */
  public getStackTasks(stack: string): Observable<JSON> {
    return this.http
      .get(this.config.getAPIHostname() + '/stacks/' + stack + '/tasks', {
        responseType: 'json',
      })
      .pipe(
        map((x) => {
          return x;
        }),
        catchError((err: HttpErrorResponse) => {
          return ErrorObservable.create({
            code: <StackErrorCode>err.status,
            message: err.error,
          });
        })
      );
  }

  /**
   * Returns a list of services associated with the stack.
   *
   * @param {string} stack
   * @returns {Observable<JSON>}
   */
  public getStackServices(stack: string): Observable<JSON> {
    return this.http
      .get(this.config.getAPIHostname() + '/stacks/' + stack + '/services', {
        responseType: 'json',
      })
      .pipe(
        map((x) => {
          return x;
        }),
        catchError((err: HttpErrorResponse) => {
          return ErrorObservable.create({
            code: <StackErrorCode>err.status,
            message: err.error,
          });
        })
      );
  }

  /**
   * Updates an existing stack.
   *
   * Note that the _64params field is a base64 encoded file.
   * @returns {Observable<StackError>}
   */
  public updateStack(name: string, _64params: string): Observable<StackError> {
    return this.http
      .put(
        this.config.getAPIHostname() + '/stacks/' + name,
        { stackFile: _64params },
        { responseType: 'text' }
      )
      .pipe(
        map((x) => {
          return {
            code: StackErrorCode.ERR_OK,
            message: 'Stack Updated',
          };
        }),
        catchError((err: HttpErrorResponse) => {
          return ErrorObservable.create({
            code: <StackErrorCode>err.status,
            message: err.error,
          });
        })
      );
  }

  /**
   * Deletes a stack.
   *
   * @returns {Observable<StackError>}
   */
  public removeStack(name: string): Observable<StackError> {
    return this.http
      .delete(this.config.getAPIHostname() + '/stacks/' + name, {
        responseType: 'text',
      })
      .pipe(
        map((x) => {
          return StackErrorCode.ERR_OK;
        }),
        catchError((err: HttpErrorResponse) => {
          return ErrorObservable.create({
            code: <StackErrorCode>err.status,
            message: err.error,
          });
        })
      );
  }
}
