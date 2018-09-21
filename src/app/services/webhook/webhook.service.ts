/**
 * Handles integration of webhooks.
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
import { Webhook } from 'app/models/webhook/webhook.model';

export enum WebhookErrorCode {
  WEBHOOKE_OK = 200,
  WEBHOOKE_SERVER_ERROR = 500,
  WEBHOOKE_NOT_FOUND = 404,
}

export interface WebhookError {
  code: WebhookErrorCode;
  message: string;
}

@Injectable()
export class WebhookService {
  constructor(private http: HttpClient, private config: ConfigurationService) {}

  /**
   * @returns {Observable<WebhookError>}
   */
  public createWebhook(wh: Webhook): Observable<WebhookError> {
    return this.http
      .post(this.config.getAPIHostname() + '/webhooks', wh, {
        responseType: 'json',
      })
      .pipe(
        map((x) => {
          return {
            code: <WebhookErrorCode>200,
            message: 'Webhook created!',
          };
        }),
        catchError((err: HttpErrorResponse) => {
          return ErrorObservable.create({
            code: <WebhookErrorCode>err.status,
            message: err.error['message'],
          });
        })
      );
  }

  public deleteWebhook(name: string): Observable<WebhookError> {
    const params = new HttpParams().set('name', name);
    return this.http
      .delete(this.config.getAPIHostname() + '/webhooks', {
        params: params,
        responseType: 'json',
      })
      .pipe(
        map((x) => {
          return {
            code: <WebhookErrorCode>200,
            message: 'Webhook deleted',
          };
        }),
        catchError((err: HttpErrorResponse) => {
          return ErrorObservable.create({
            code: <WebhookErrorCode>err.status,
            message: err.error['message'],
          });
        })
      );
  }
}
