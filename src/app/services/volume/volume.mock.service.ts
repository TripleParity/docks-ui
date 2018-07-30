/**
 * Volume service implementation.
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
import { Volume } from '../../models/volume/volume.model';
import { ConfigurationService } from '../../services/configuration/configuration.service';

enum VolumeError {
  ERR_STREAM = 101,
  ERR_OK = 200,
  ERR_OK_DELETED = 204,
  ERR_NO_OP = 403,
  ERR_NO_VOLUME = 404,
  ERR_VOLUME_IS_USE = 409,
  ERR_SERVER = 500,
}

@Injectable()
export class VolumeService {
  constructor() {}

  /**
   * Returns a list of volumes.
   *
   * @returns {Observable<Volume[]>}
   */
  public getVolumes(): Observable<Volume[]> {
    return null;
  }

  /**
   * Returns warnings.
   * @returns {Observable<JSON>}
   */
  public getWarnings(): Observable<JSON> {
    return null;
  }

  // TODO: (A Helberg) Implement the filter function
  /**
   * Creates a volume based on JSON input.
   * See the docker documentation for more information.
   *
   * @param {JSON} inputs
   * @returns {Observable<Volume>}
   */
  public createVolume(inputs: JSON): Observable<Volume> {
    return null;
  }

  /**
   * Returns detailed information about the target volume.
   * @param {string} id
   * @returns {Observable<Volume>}
   */
  public inspectVolumes(id: string): Observable<Volume> {
    return null;
  }

  /**
   * Deletes the target volume.
   *
   * @param {string} id
   * @param {boolean} force
   * @returns {Observable<JSON>}
   */
  public deleteVolume(id: string, force: boolean): Observable<JSON> {
    return null;
  }

  /**
   * Prunes unused volumes.
   * @returns {Observable<JSON>}
   */
  public pruneVolume(): Observable<JSON> {
    return null;
  }
}
