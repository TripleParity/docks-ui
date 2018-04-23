import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClientModule, HttpClient, HttpParams} from '@angular/common/http';
import {Container} from '../../_models';
import {map} from 'rxjs/operators';



@Injectable()
export class ContainerService {
  private host: string;
  constructor(private http: HttpClient) {
        this.host = 'http://localhost:8080';
  }

  public getContainer(): Observable<Container[]> {
      return this.http.get<JSON>(this.host + '/docker/containers/json', {responseType: 'json'}).pipe(
          map(data => {
              const containers: Container[] = [];
              for (let i = 0; i < Object.keys(data).length; i++) {
                  containers.push(Container.parse(data[i]));
              }
              return containers;
          })
      );
  }
}
