/**
 * Handles integration of the networking components present in docker.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { catchError, map } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import { ConfigurationService } from '../configuration/configuration.service';
import { Node } from 'app/models/node/node.model';

enum NodeErrorCode {
  ERR_OK = 200,
  ERR_SERVER = 500,
  ERR_NO_SWARM = 503,
}

export interface NodeError {
  code: NodeErrorCode;
  message: string;
}

@Injectable()
export class NodeService {
  constructor(private http: HttpClient, private config: ConfigurationService) {}

  /**
   * @returns {Observable<Node[]>}
   */
  public getNodes(): Observable<Node[]> {
    return this.http
      .get(this.config.getAPIHostname() + '/docker/nodes', {
        responseType: 'json',
      })
      .pipe(
        map((x) => {
          return <Node[]>x;
        }),
        catchError((err: HttpErrorResponse) => {
          return ErrorObservable.create({
            code: <NodeErrorCode>err.status,
            message: err.error['message'],
          });
        })
      );
  }
}
