import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Container } from '../../models/container/container.model';
import { map } from 'rxjs/operators';
import { ConfigurationService } from '../configuration/configuration.service';



@Injectable()
export class ContainerService {
  constructor(private http: HttpClient, private config: ConfigurationService) {}

    /**
     * Returns a list of all containers present on the endpoint.
     *
     * @returns {Observable<Container[]>}
     */
  public getContainer(): Observable<Container[]> {
      return this.http.get<JSON>(this.config.getAPIHostname() + '/docker/containers/json', {responseType: 'json'}).pipe(
          map(data => {
              const containers: Container[] = [];
              for (let i = 0; i < Object.keys(data).length; i++) {
                  containers.push(data[i]);
              }
              return containers;
          })
      );
  }
}
