/**
 * Implementation of the Task service to integrate with docker.
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Task } from '../../models/task/task.model';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { ConfigurationService } from '../configuration/configuration.service';

export enum TaskErrorCode {
  ERR_OK = 200,
  ERR_SERVER = 500,
  ERR_NODE_N_SWARM = 503,
  ERR_NO_TASK = 404,
}

export interface TaskError {
  code: TaskErrorCode;
  message: string;
}

@Injectable()
export class TaskService {
  constructor(private http: HttpClient, private config: ConfigurationService) {}

  /**
   * Returns a list of tasks.
   * @returns {Observable<Task[]>}
   */
  public getTasks(): Observable<Task[]> {
    return this.http
      .get(this.config.getAPIHostname() + '/docker/tasks', {
        responseType: 'json',
      })
      .pipe(
        map((data) => {
          const tasks: Task[] = [];
          for (let i = 0; i < Object.keys(data).length; i++) {
            tasks.push(data[i]);
          }
          return tasks;
        }),
        catchError((err: HttpErrorResponse) => {
          return ErrorObservable.create({
            code: <TaskErrorCode>err.status,
            message: err.error['message'],
          });
        })
      );
  }

  /**
   * Returns a log associated with the particular task.
   * @param {string} id
   * @returns {Observable<string>}
   */
  public getLog(id: string): Observable<string> {
    const params: HttpParams = new HttpParams().set('stdout', 'true');
    return this.http
      .get(this.config.getAPIHostname() + '/docker/tasks/' + id + '/logs', {
        params: params,
        responseType: 'text' as 'text',
      })
      .pipe(
        map((x) => {
          return x;
        }),
        catchError((err: HttpErrorResponse) => {
          return ErrorObservable.create({
            code: <TaskErrorCode>err.status,
            message: err.error['message'],
          });
        })
      );
  }

  /**
   * Inspects a particular task.
   *
   * @param {string} id
   * @returns {Observable<JSON>}
   */
  public inspect(id: string): Observable<JSON> {
    return this.http
      .get<JSON>(this.config.getAPIHostname() + '/docker/tasks/' + id, {
        responseType: 'json',
      })
      .pipe(
        map((x) => {
          return x;
        }),
        catchError((err: HttpErrorResponse) => {
          return ErrorObservable.create({
            code: <TaskErrorCode>err.status,
            message: err.error['message'],
          });
        })
      );
  }
}
