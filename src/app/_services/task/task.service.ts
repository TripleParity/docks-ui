import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Task} from '../../_models';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';

export enum TaskError {
    ERR_OK = 200,
    ERR_SERVER = 500,
    ERR_NODE_N_SWARM = 503,
    ERR_NO_TASK = 404,
}

@Injectable()
export class TaskService {

    constructor(private http: HttpClient) {
    }

    public getTasks(): Observable<Task[]> {
        return this.http.get('http://localhost:8080/docker/tasks', {responseType: 'json'})
            .pipe(
                map(data => {
                    console.log(data);
                    const tasks: Task[] = [];
                    for (let i = 0; i < Object.keys(data).length; i++) {
                        tasks.push(Task.parse(data[i]));
                    }
                    return tasks;
                }), catchError((err: HttpErrorResponse) => {
                    return ErrorObservable.create(<TaskError>err.status);
                })
            );
    }

    public getLog(id: string): Observable<string> {
        return this.http.get('http://localhost:8080/docker/tasks/' + id + '/logs', {responseType: 'text'})
            .pipe(
              map(x => {
                 return x;
              }), catchError((err: HttpErrorResponse) => {
                  return ErrorObservable.create(<TaskError>err.status);
                })
            );
    }

    public inspect(id: string): Observable<JSON> {
        return this.http.get<JSON>('http://localhost:8080/docker/tasks/' + id, {responseType: 'json'})
            .pipe(map(x => {
                return x;
            }), catchError((err: HttpErrorResponse) => {
                return ErrorObservable.create(<TaskError>err.status);
            })
        );
    }
}
