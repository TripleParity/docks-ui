import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {Service} from '../../_models';
import {ConfigurationService} from '..';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';

export enum ServiceError {
    ERR_OK = 200,
    ERR_SERVER = 500,
    ERR_NODE_N_SWARM = 503,
    ERR_BAD_PARAM = 400,
    ERR_NET_SERVICE = 403,
    ERR_NAME_CONFLICT = 409,
    ERR_NO_SERVICE = 404,
    ERR_STREAM = 101,
}

@Injectable()
export class ServicesService {

    constructor(private config: ConfigurationService, private http: HttpClient) {
    }

    public getServices(): Observable<Service[]> {
        return this.http.get(this.config.getAPIHostname() + '/docker/services', {responseType: 'json'})
            .pipe(
                map(data => {
                    const services: Service[] = [];
                    for (let i = 0; i < Object.keys(data).length; i++) {
                        services.push(Service.parse(data[i]));
                    }
                    return services;
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
}
