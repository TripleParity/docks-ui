import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {Service} from '../../_models';
import {ConfigurationService} from '../configuration/configuration.service';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {Services} from '@angular/core/src/view';
import {ServiceSpec} from '../../_models/service/spec.model';


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

    public inspectService(id: string): Observable<ServiceSpec> {
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


    public updateService(id: string, params: ServiceSpec): Observable<string> {
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
       return this.inspectService(id)
           .pipe(map((spec: ServiceSpec) => {
                    spec.Mode.Replicated.Replicas = replicas;
                    return this.updateService(id, spec);
               }), catchError((err: HttpErrorResponse) => {
                   return ErrorObservable.create(<ServiceError>err.status);
               })
           );
    }

    public createService(params: ServiceSpec): Observable<JSON> {
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
