import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Container } from '../../models/container/container.model';

@Injectable()
export class ContainerService {
  constructor() {}

  /**
   * Returns a list of all containers present on the endpoint.
   *
   * @returns {Observable<Container[]>}
   */
  public getContainer(): Observable<Container[]> {
    return null;
  }
}
