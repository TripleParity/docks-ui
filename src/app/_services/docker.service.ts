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
        return this.http.get<string>(this.host + '/docker/', { responseType: 'json' });
    }

    public stopContainer(id: string): Observable<string> {
        return this.http.post<string>(this.host + '/docker/containers/' + id + '/stop', { responseType: 'json' });
    }

    public startContainer(id: string): Observable<string> {
        return this.http.post<string>(this.host + '/docker/containers/' + id + '/start', { responseType: 'json' });
    }

    public setHost(host: string) {
        this.host = host;
    }
}
