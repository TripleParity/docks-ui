/**
 * Implementation of the Task service to integrate with docker.
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Task } from '../../models/task/task.model';

export enum TaskError {
  ERR_OK = 200,
  ERR_SERVER = 500,
  ERR_NODE_N_SWARM = 503,
  ERR_NO_TASK = 404,
}

@Injectable()
export class TaskService {
  constructor() {}

  /**
   * Returns a list of tasks.
   * @returns {Observable<Task[]>}
   */
  public getTasks(): Observable<Task[]> {
    return null;
  }

  /**
   * Returns a log associated with the particular task.
   * @param {string} id
   * @returns {Observable<string>}
   */
  public getLog(id: string): Observable<string> {
    return null;
  }

  /**
   * Inspects a particular task.
   *
   * @param {string} id
   * @returns {Observable<JSON>}
   */
  public inspect(id: string): Observable<JSON> {
    return null;
  }
}
