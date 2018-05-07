import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {Service} from '../../_models';
import {ConfigurationService} from '..';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {CreateService} from '../../_models/service/createservice.model';
import {Services} from '@angular/core/src/view';

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

    constructor(private config: ConfigurationService, private http: HttpClient) {
    }

    public getServices(): Observable<Service[]> {
        return this.http.get(this.config.getAPIHostname() + '/docker/services', {responseType: 'json'})
            .pipe(
                map(data => {
                    return <Services[]>data;
                }), catchError((err: HttpErrorResponse) => {
                    return ErrorObservable.create(<ServiceError>err.status);
                })
            );
    }

    public inspectService(id: string): Observable<JSON> {
        return this.http.get<JSON>(this.config.getAPIHostname() + '/docker/services/' + id, {responseType: 'json'})
            .pipe(map(x => {
                    return x;
                }), catchError((err: HttpErrorResponse) => {
                    return ErrorObservable.create(<ServiceError>err.status);
                })
            );
    }

    public deleteService(id: string): Observable<JSON> {
        return this.http.delete<JSON>(this.config.getAPIHostname() + '/docker/services/' + id, {responseType: 'json'})
            .pipe(map(x => {
                    return x;
                }), catchError((err: HttpErrorResponse) => {
                    return ErrorObservable.create(<ServiceError>err.status);
                })
            );
    }

    public getServiceLog(id: string): Observable<string> {
        return this.http.get<JSON>(this.config.getAPIHostname() + '/docker/services/' + id + '/logs', {responseType: 'json'})
            .pipe(map(x => {
                    return x;
                }), catchError((err: HttpErrorResponse) => {
                    return ErrorObservable.create(<ServiceError>err.status);
                })
            );
    }


    // ADDED operations
    public updateService(id: string, params: CreateService): Observable<string> {
        return this.http.post(this.config.getAPIHostname() + '/docker/services/' + id,
            { params }, { responseType: 'json' })
            .pipe(map(x => {
                    return x;
                }), catchError((err: HttpErrorResponse) => {
                    return ErrorObservable.create(<ServiceError>err.status);
                })
            );
    }

    public scaleService(id: string, replicas: number): Observable<string> {
        let cs: CreateService = null;
        // TODO(CDuPlooy): Check if this works while the other fields have not been set.
        cs.Mode.Replicated.Replicas = replicas;
        return this.updateService(id, cs);
    }

    public createService(params: CreateService): Observable<JSON> {
        return this.http.post(this.config.getAPIHostname() + '/docker/services/create', {params}, {responseType: 'json'})
            .pipe(map((x: Response) => {
                    // x.json might not be what we want.
                    x.json().then(data => {
                        return data;
                    }).catch(() => {
                        return ServiceError.ERR_UNKNOWN;
                    });
                }), catchError((err: HttpErrorResponse) => {
                    return ErrorObservable.create(<ServiceError>err.status);
                })
            );

    }
}
