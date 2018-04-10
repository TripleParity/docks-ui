import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DockerService {

  constructor(private http: HttpClient) {
        this.host = 'http://localhost:8080';
  }
    private host: string;

    public getContainers(): Observable<string> {
        return this.http.get<string>('$(this.host)/docker/containers/json', { responseType: 'json' });
    }

    public pingHost(): Observable<string> {
        return this.http.get<string>('$(this.host)/docker', { responseType: 'json' });
    }

    public setHost(host: string) {
        this.host = host;
    }
}
