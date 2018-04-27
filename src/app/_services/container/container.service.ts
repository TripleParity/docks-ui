import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClientModule, HttpClient, HttpParams} from '@angular/common/http';
import {Container} from '../../_models';
import {map} from 'rxjs/operators';
import {ConfigurationService} from '../configuration/configuration.service';



@Injectable()
export class ContainerService {
  constructor(private http: HttpClient, private config: ConfigurationService) {}

  public getContainer(): Observable<Container[]> {
      return this.http.get<JSON>(this.config.getAPIHostname() + '/docker/containers/json', {responseType: 'json'}).pipe(
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
