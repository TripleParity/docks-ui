import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClientModule, HttpClient, HttpParams} from '@angular/common/http';
import {Container} from '../../_models';
import {map} from 'rxjs/operators';
import {Task} from '../../_models';

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
        return this.http.get('localhost:8080/docker/tasks', {responseType: 'json'})
            .pipe(
                map(data => {
                    const tasks: Task[] = [];
                    for (let i = 0; i < Object.keys(data).length; i++) {
                        tasks.push(Task.parse(data[i]));
                    }
                    return tasks;
                })
            );
    }

}
