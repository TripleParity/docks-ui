import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Stack } from 'app/models/stack/stack.model';
import { Observable } from 'rxjs/Observable';

export enum StackError {
  ERR_OK = 200,
  ERR_STACK_NAME_TAKEN = 409,
  ERR_STACK_MISSING = 404, // sigh
}

// Compound structure
export interface StackResult {
  code: StackError;
  message: string;
}

// TODO(CDuPlooy): Add helper to encode file
// TODO(CDuPlooy): Proper modelling of the returned tasks && services.

@Injectable()
export class StackService {
  constructor() {}

  /**
   * Returns a list of stacks from the docks-api
   *
   * @returns {Observable<Stack>}
   */
  public getStacks(): Observable<Stack[]> {
    return null;
  }

  /**
   * Creates a new stack.
   *
   * Note that the _64params field is a base64 encoded file.
   * @returns {Observable<StackResult>}
   */
  public deployStack(name: string, _64params: string): Observable<StackResult> {
    return null;
  }

  /**
   * Returns a list of tasks associated with the stack.
   *
   * @param {string} stack
   * @returns {Observable<JSON>}
   */
  public getStackTasks(stack: string): Observable<JSON> {
    return null;
  }

  /**
   * Returns a list of services associated with the stack.
   *
   * @param {string} stack
   * @returns {Observable<JSON>}
   */
  public getStackServices(stack: string): Observable<JSON> {
    return null;
  }

  /**
   * Updates an existing stack.
   *
   * Note that the _64params field is a base64 encoded file.
   * @returns {Observable<StackResult>}
   */
  public updateStack(name: string, _64params: string): Observable<StackResult> {
    return null;
  }

  /**
   * Deletes a stack.
   *
   * @returns {Observable<StackError>}
   */
  public removeStack(name: string): Observable<StackError> {
    return null;
  }
}
