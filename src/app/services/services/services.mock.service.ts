/**
 * Handles integration of services with docks-api.
 */

import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Service } from '../../models/service/service.model';
import { ServiceSpec } from '../../models/service/spec/spec.model';

export enum ServiceError {
  ERR_OK = 200,
  ERR_SERVER = 500,
  ERR_NODE_N_SWARM = 503,
  ERR_BAD_PARAM = 400,
  ERR_NET_SERVICE = 403,
  ERR_NAME_CONFLICT = 409,
  ERR_NO_SERVICE = 404,
  ERR_STREAM = 101,
  ERR_UNKNOWN,
}

@Injectable()
export class ServicesService {
  constructor() {}

  /**
   * Returns a list of services
   *
   * @returns {Observable<Service[]>}
   */
  public getServices(): Observable<Service[]> {
    return null;
  }

  /**
   * Returns more detailed information about a particular service.
   *
   * @param {string} id
   * @returns {Observable<ServiceSpec>}
   */
  public inspectService(id: string): Observable<ServiceSpec> {
    return null;
  }

  /**
   * Deletes a target service.
   *
   * @param {string} id
   * @returns {Observable<JSON>}
   */
  public deleteService(id: string): Observable<JSON> {
    return null;
  }

  /**
   * Returns the log associated with the target service.
   *
   * @param {string} id
   * @returns {Observable<string>}
   */
  public getServiceLog(id: string): Observable<string> {
    return null;
  }

  /**
   * Makes changes to the target service based on the input service specification.
   *
   * @param {string} id
   * @param {ServiceSpec} params
   * @returns {Observable<string>}
   */
  public updateService(id: string, params: ServiceSpec): Observable<string> {
    return null;
  }

  /**
   * Helper function utilising updateService(); Meant to show how a particular
   * field could be changed from the frontend. Perhaps we should verify that this is working.
   *
   * @param {string} id
   * @param {number} replicas
   * @returns {Observable<string>}
   */
  public scaleService(id: string, replicas: number): Observable<string> {
    return null;
  }

  /**
   * Creates a service based on the input service specification.
   *
   * @param {ServiceSpec} params
   * @returns {Observable<JSON>}
   */
  public createService(params: ServiceSpec): Observable<JSON> {
    return null;
  }
}
