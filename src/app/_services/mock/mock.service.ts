import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {catchError, map} from 'rxjs/operators';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {TaskError} from '../task/task.service';
import {Task} from '../../_models';

/*
    This service will be used for testing, for instance
    the json returned from the backend will always be the same
    structure.

    This service should be used to test parsing of that json
    and perhaps display of components. We could also use this for demos.

 */

@Injectable()
export class MockService {

    private myTasks: Task[] = [];
    public getTasks(): Observable<Task[]> {
        this.myTasks.push(Task.parse(JSON.parse('{"ID": "0kzzo1i0y4jz6027t0k7aezc7","Version": {},' +
            '"CreatedAt": "2016-06-07T21:07:31.171892745Z",' +
            '"UpdatedAt": "2016-06-07T21:07:31.376370513Z","Spec": { "ContainerSpec" : { "Image" : "redis" } },' +
            '"ServiceID": "9mnpnzenvg8p8tdbtq4wvbkcz",' +
            '"Slot": 1,"NodeID": "60gvrl6tm78dmak4yl7srz94v","Status": {},"DesiredState": "running","NetworksAttachments": []}')));
        this.myTasks.push(Task.parse(JSON.parse('{"ID": "1yljwbmlr8er2waf8orvqpwms",' +
            '"Version": {},"CreatedAt": "2016-06-07T21:07:30.019104782Z",' +
            ' "UpdatedAt": "2016-06-07T21:07:30.231958098Z","Name": "hopeful_cori",' +
            '"Spec": {  "ContainerSpec" : { "Image" : "Not Redis" } },"ServiceID": "9mnpnzenvg8p8tdbtq4wvbkcz","Slot": 1,' +
            '"NodeID": "60gvrl6tm78dmak4yl7srz94v", "Status": {},"DesiredState": "shutdown",' +
            '"NetworksAttachments": []}')));
        return Observable.create((obvs) => {
            obvs.next(this.myTasks);
        });
    }

}
