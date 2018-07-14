import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { catchError, map } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Volume } from '../../models/volume/volume.model';
import { ConfigurationService } from '../../services/configuration/configuration.service';

enum VolumeError {
    ERR_STREAM = 101,
    ERR_OK = 200,
    ERR_OK_DELETED = 204,
    ERR_NO_OP= 403,
    ERR_NO_VOLUME= 404,
    ERR_VOLUME_IS_USE = 409,
    ERR_SERVER = 500,
}

@Injectable()
export class VolumeService {

        constructor(private http: HttpClient, private config: ConfigurationService) {
        }

        public getVolumes(): Observable<Volume[]> {
           return this.http.get(this.config.getAPIHostname() + '/docker/volumes', {responseType: 'json'})
                .pipe(map(x => {
                    return <Volume[]>x['Volumes'];
                }), catchError((err: HttpErrorResponse) => {
                    return ErrorObservable.create(<VolumeError>err.status);
                })
           );
        }

        public getWarnings(): Observable<JSON> {
            return this.http.get(this.config.getAPIHostname() + '/docker/volumes', {responseType: 'json'})
                .pipe(map(x => {
                    return x['Warnings'];
                }), catchError((err: HttpErrorResponse) => {
                    return ErrorObservable.create(<VolumeError>err.status);
                })
            );
        }

        // TODO: (A Helberg) Implement the filter function

        public createVolume(inputs: JSON): Observable<Volume> {
            return this.http.post(this.config.getAPIHostname() + '/docker/volumes/create',
            inputs, {responseType: 'json'})
                .pipe(map(x => {
                    return <Volume>x;
                }), catchError((err: HttpErrorResponse) => {
                    return ErrorObservable.create(<VolumeError>err.status);
                })
            );
        }

        public inspectVolumes(id: string): Observable<Volume> {
            return this.http.get(this.config.getAPIHostname() + '/docker/volumes/' + id, {responseType: 'json'})
                .pipe(map(x => {
                    return <Volume>x;
                }), catchError((err: HttpErrorResponse) => {
                    return ErrorObservable.create(<VolumeError>err.status);
                })
            );
        }

        public deleteVolume(id: string, force: boolean): Observable<JSON> {
            const params = new HttpParams().set('force', force.toString());

            return this.http.delete(this.config.getAPIHostname() + '/docker/volumes/' + id, {params: params, responseType: 'json'})
                .pipe(map(x => {
                    return x;
                }), catchError((err: HttpErrorResponse) => {
                    return ErrorObservable.create(<VolumeError>err.status);
                })
            );
        }

        public pruneVolume(): Observable<JSON> {
            return this.http.post(this.config.getAPIHostname() + '/docker/volumes/prune', {responseType: 'json'})
                .pipe(map(x => {
                    return x;
                }), catchError((err: HttpErrorResponse) => {
                    return ErrorObservable.create(<VolumeError>err.status);
                })
            );
        }
}
