import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Container } from '../_models/container.model';

import 'rxjs/add/operator/map';



@Injectable()
export class DockerService {

  constructor(private http: HttpClient) {
        this.host = 'http://localhost:8080';
  }
    private host: string;

    public getContainers(displayAll: boolean): Observable<string> {
        let all: string;
        if (displayAll === true) {
            all = 'true';
        } else {
            all = 'false';
        }
        const params = new HttpParams().set('all', all);
        return this.http.get<string>(this.host + '/docker/containers/json', { params: {all}, responseType: 'json' });
    }

    public pingHost(): Observable<string> {
        return this.http.get<string>(this.host + '/docker/_ping', {});
    }

    public stopContainer(id: string): Observable<string> {
        return this.http.post<string>(this.host + '/docker/containers/' + id + '/stop', { responseType: 'json' });
    }

    public startContainer(id: string): Observable<string> {
        return this.http.post<string>(this.host + '/docker/containers/' + id + '/start', {});
    }

    public setHost(host: string) {
        this.host = host;
    }

    public createStack(composeFile: string): Observable<string> {
        return this.http.post<string>(this.host + '/api/stacks/create', {composeFile});
    }

    public attachContainer(id: string): Observable<string> {
        const stream = 'true';
        const params = new HttpParams().set('stream', 'true');
        return this.http.post<string>(this.host + '/docker/containers/' + id + '/attach', { params: {stream}});
    }

    public removeContainer(id: string): Observable<string> {
        return this.http.delete<string>(this.host + '/docker/containers/' + id, {});
    }

    public getNetworks(): Observable<string> {
        return this.http.get<string>(this.host + '/docker/networks', {responseType: 'json' });
    }
}
