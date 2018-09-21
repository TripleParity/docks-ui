/**
 * Handles integration of services with docks-api.
 */

import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Services } from '@angular/core/src/view';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Service } from '../../models/service/service.model';
import { ConfigurationService } from '../configuration/configuration.service';
import { ServiceSpec } from '../../models/service/spec/spec.model';

export enum ServiceErrorCode {
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

export interface ServiceError {
  code: ServiceErrorCode;
  message: string;
}

@Injectable()
export class ServicesService {
  constructor(private config: ConfigurationService, private http: HttpClient) {}

  /**
   * Returns a list of services
   *
   * @returns {Observable<Service[]>}
   */
  public getServices(): Observable<Service[]> {
    return this.http
      .get(this.config.getAPIHostname() + '/docker/services', {
        responseType: 'json',
      })
      .pipe(
        map((data) => {
          return <Services[]>data;
        }),
        catchError((err: HttpErrorResponse) => {
          return ErrorObservable.create({
            code: <ServiceErrorCode>err.status,
            message: err.error['message'],
          });
        })
      );
  }

  /**
   * Returns more detailed information about a particular service.
   *
   * @param {string} id
   * @returns {Observable<Service>}
   */
  public inspectService(id: string): Observable<Service> {
    return this.http
      .get<JSON>(this.config.getAPIHostname() + '/docker/services/' + id, {
        responseType: 'json',
      })
      .pipe(
        map((x) => {
          return x;
        }),
        catchError((err: HttpErrorResponse) => {
          // On some unknown condition:
          // TypeError: Cannot read property 'message' of undefined
          // TODO(egeldenhuys): Fix error here...
          let message = 'SHOULD BE A MESSAGE';

          if (err.error === undefined) {
            console.error('Error, but no message was returned!');
            message = 'Something went wrong. (From: services.service.ts:~81)';
          } else {
            message = err.error['message'];
          }

          return ErrorObservable.create({
            code: <ServiceErrorCode>err.status,
            message: message,
          });
        })
      );
  }

  /**
   * Deletes a target service.
   *
   * @param {string} id
   * @returns {Observable<JSON>}
   */
  public deleteService(id: string): Observable<JSON> {
    return this.http
      .delete<JSON>(this.config.getAPIHostname() + '/docker/services/' + id, {
        responseType: 'json',
      })
      .pipe(
        map((x) => {
          return x;
        }),
        catchError((err: HttpErrorResponse) => {
          return ErrorObservable.create({
            code: <ServiceErrorCode>err.status,
            message: err.error['message'],
          });
        })
      );
  }

  /**
   * Returns the log associated with the target service.
   *
   * @param {string} id
   * @returns {Observable<string>}
   */
  public getServiceLog(id: string): Observable<string> {
    const params: HttpParams = new HttpParams().set('stdout', 'true');
    // tslint:disable-next-line
    return this.http
      .get(this.config.getAPIHostname() + '/docker/services/' + id + '/logs', {
        params: params,
        responseType: 'text' as 'text',
      })
      .pipe(
        map((x) => {
          return x;
        }),
        catchError((err: HttpErrorResponse) => {
          return ErrorObservable.create({
            code: <ServiceErrorCode>err.status,
            message: err.error['message'],
          });
        })
      );
  }

  /**
   * Makes changes to the target service based on the input service specification.
   *
   * @param {string} id
   * @param {ServiceSpec} params
   * @returns {Observable<string>}
   */
  public updateService(id: string, params: ServiceSpec): Observable<string> {
    return this.http
      .post(
        this.config.getAPIHostname() + '/docker/services/' + id,
        { params },
        { responseType: 'json' }
      )
      .pipe(
        map((x) => {
          return x;
        }),
        catchError((err: HttpErrorResponse) => {
          return ErrorObservable.create({
            code: <ServiceErrorCode>err.status,
            message: err.error['message'],
          });
        })
      );
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
    return this.inspectService(id).pipe(
      map((serv: Service) => {
        serv.Spec.Mode.Replicated.Replicas = replicas;
        return this.updateService(id, serv.Spec);
      }),
      catchError((err: HttpErrorResponse) => {
        return ErrorObservable.create({
          code: <ServiceErrorCode>err.status,
          message: err.error['message'],
        });
      })
    );
  }

  /**
   * Creates a service based on the input service specification.
   *
   * @param {ServiceSpec} params
   * @returns {Observable<JSON>}
   */
  public createService(params: ServiceSpec): Observable<JSON> {
    return this.http
      .post(
        this.config.getAPIHostname() + '/docker/services/create',
        { params },
        { responseType: 'json' }
      )
      .pipe(
        map((x: Response) => {
          // x.json might not be what we want.
          x.json()
            .then((data) => {
              return data;
            })
            .catch(() => {
              return ServiceErrorCode.ERR_UNKNOWN;
            });
        }),
        catchError((err: HttpErrorResponse) => {
          return ErrorObservable.create({
            code: <ServiceErrorCode>err.status,
            message: err.error['message'],
          });
        })
      );
  }
}
