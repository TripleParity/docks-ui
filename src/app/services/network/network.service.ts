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
import { Network } from 'app/models/network/network.model';

enum NetworkErrorCode {
  ERR_OK = 200,
  ERR_SERVER = 500,
  ERR_NO_NETWORK = 404,
  ERR_NO_OP = 403,
  ERR_STREAM = 101,
}

export interface NetworkError {
  code: NetworkErrorCode;
  message: string;
}

@Injectable()
export class NetworkService {
  constructor(private http: HttpClient, private config: ConfigurationService) {}

  /**
   * @returns {Observable<Network[]>}
   */
  public getNetworks(): Observable<Network[]> {
    return this.http
      .get(this.config.getAPIHostname() + '/docker/networks', {
        responseType: 'json',
      })
      .pipe(
        map((x) => {
          return <Network>x;
        }),
        catchError((err: HttpErrorResponse) => {
          return ErrorObservable.create({
            code: <NetworkErrorCode>err.status,
            message: err.error['message'],
          });
        })
      );
  }

  /**
   * Returns networks matching the parameters, these values can be omitted should
   * you not want to filter according to them.
   *
   * @param {string} id
   * @param {string} name
   * @param {string} label
   * @param {string} mode
   * @returns {Observable<Network[]>}
   */
  public getNetworksFiltered(
    id: string,
    name: string,
    label: string,
    mode: string
  ): Observable<Network[]> {
    // TODO:(CDuPlooy) Encoding of json object in params is not correct.
    const params = new HttpParams().set(
      'filters',
      JSON.stringify({ id: id, name: name, label: label, mode: mode })
    );

    return this.http
      .get(this.config.getAPIHostname() + '/docker/networks', {
        params: params,
        responseType: 'json',
      })
      .pipe(
        map((x) => {
          return <Network>x;
        }),
        catchError((err: HttpErrorResponse) => {
          return ErrorObservable.create({
            code: <NetworkErrorCode>err.status,
            message: err.error['message'],
          });
        })
      );
  }

  /**
   * Inspects the target network giving either verbose/non-verbose output.
   *
   * @param {string} id
   * @param {boolean} verbose
   * @returns {Observable<Network>}
   */
  public inspectNetwork(id: String): Observable<Network> {
    return this.http
      .get(this.config.getAPIHostname() + '/docker/networks/' + id, {
        responseType: 'json',
      })
      .pipe(
        map((x) => {
          return <Network>x;
        }),
        catchError((err: HttpErrorResponse) => {
          return ErrorObservable.create({
            code: <NetworkErrorCode>err.status,
            message: err.error['message'],
          });
        })
      );
  }

  /**
   * Deletes the target network.
   *
   * @param {string} id
   * @returns {Observable<JSON>}
   */
  public deleteNetwork(id: string): Observable<JSON> {
    return this.http
      .delete(this.config.getAPIHostname() + '/docker/networks/' + id, {
        responseType: 'json',
      })
      .pipe(
        map((x) => {
          return x;
        }),
        catchError((err: HttpErrorResponse) => {
          return ErrorObservable.create({
            code: <NetworkErrorCode>err.status,
            message: err.error['message'],
          });
        })
      );
  }

  // TODO:(CDuPlooy): Create a network query parameters not working. ( Encoding of json object )

  /**
   * Connects the target container to the target network.
   *
   * @param {Network} network
   * @returns {Observable<JSON>}
   */
  public createNetwork(inputs: Network): Observable<Network> {
    return this.http
      .post(this.config.getAPIHostname() + 'docker/networks/create', inputs, {
        responseType: 'json',
      })
      .pipe(
        map((x) => {
          return <Network>x;
        }),
        catchError((err: HttpErrorResponse) => {
          return ErrorObservable.create({
            code: <NetworkErrorCode>err.status,
            message: err.error['message'],
          });
        })
      );
  }


  /**
   * Connects the target container to the target network.
   *
   * @param {string} network_id
   * @param {string} container_id
   * @returns {Observable<JSON>}
   */
  public connectContainer(
    network_id: string,
    container_id: string
  ): Observable<JSON> {
    // TODO:(CDuPlooy): Add IPAM parameter.

    return this.http
      .post(
        this.config.getAPIHostname() +
          '/docker/networks/' +
          network_id +
          '/connect',
        { Container: container_id },
        { responseType: 'json' }
      )
      .pipe(
        map((x) => {
          return x;
        }),
        catchError((err: HttpErrorResponse) => {
          return ErrorObservable.create({
            code: <NetworkErrorCode>err.status,
            message: err.error['message'],
          });
        })
      );
  }

  /**
   * Disconnects the target container from the target network; If disconnection is forced
   * the connection is not closed gracefully.
   *
   * @param {string} network_id
   * @param {string} container_id
   * @param {boolean} force
   * @returns {Observable<JSON>}
   */
  public disconnectContainer(
    network_id: string,
    container_id: string,
    force: boolean
  ): Observable<JSON> {
    // TODO:(CDuPlooy): Add IPAM parameter.

    return this.http
      .post(
        this.config.getAPIHostname() +
          '/docker/networks/' +
          network_id +
          '/disconnect',
        { Container: container_id, Force: force },
        { responseType: 'json' }
      )
      .pipe(
        map((x) => {
          return x;
        }),
        catchError((err: HttpErrorResponse) => {
          return ErrorObservable.create({
            code: <NetworkErrorCode>err.status,
            message: err.error['message'],
          });
        })
      );
  }

  /**
   * Cleans up unused networks.
   *
   * @returns {Observable<JSON>}
   */
  public prune(): Observable<JSON> {
    return this.http
      .post(this.config.getAPIHostname() + '/docker/networks/prune', {
        responseType: 'json',
      })
      .pipe(
        map((x) => {
          return x;
        }),
        catchError((err: HttpErrorResponse) => {
          return ErrorObservable.create({
            code: <NetworkErrorCode>err.status,
            message: err.error['message'],
          });
        })
      );
  }
}
