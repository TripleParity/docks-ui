/**
 * Handles integration of the networking components present in docker.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Network } from 'app/models/network/network.model';

enum NetworkError {
  ERR_OK = 200,
  ERR_SERVER = 500,
  ERR_NO_NETWORK = 404,
  ERR_NO_OP = 403,
  ERR_STREAM = 101,
}

@Injectable()
export class NetworkService {
  constructor() {}

  /**
   * @returns {Observable<Network[]>}
   */
  public getNetworks(): Observable<Network[]> {
    return null;
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
    return null;
  }

  /**
   * Inspects the target network giving either verbose/non-verbose output.
   *
   * @param {string} id
   * @param {boolean} verbose
   * @returns {Observable<Network>}
   */
  public inspectNetwork(id: string, verbose: boolean): Observable<Network> {
    return null;
  }

  /**
   * Deletes the target network.
   *
   * @param {string} id
   * @returns {Observable<JSON>}
   */
  public deleteNetwork(id: string): Observable<JSON> {
    return null;
  }

  // TODO:(CDuPlooy): Create a network query parameters not working. ( Encoding of json object )
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
    return null;
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

    return null;
  }

  /**
   * Cleans up unused networks.
   *
   * @returns {Observable<JSON>}
   */
  public prune(): Observable<JSON> {
    return null;
  }
}
