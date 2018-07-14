import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { catchError, map } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Network } from '../../models/network/network.model';
import { ConfigurationService } from '../configuration/configuration.service';
import { RequestOptions } from '@angular/http';

enum NetworkError {
    ERR_OK = 200,
    ERR_SERVER = 500,
    ERR_NO_NETWORK= 404,
    ERR_NO_OP= 403,
    ERR_STREAM = 101,
}

@Injectable()
export class NetworkService {
    constructor(private http: HttpClient, private config: ConfigurationService) {
    }

    public getNetworks(): Observable<Network[]> {
        return this.http.get(this.config.getAPIHostname() + '/docker/networks', {responseType: 'json'})
            .pipe(map(x => {
                    return <Network>x;
                }), catchError((err: HttpErrorResponse) => {
                    return ErrorObservable.create(<NetworkError>err.status);
                })
            );
    }

    public getNetworksFiltered(id: string, name: string, label: string, mode: string): Observable<Network[]> {
        // TODO:(CDuPlooy) Encoding of json object in params is not correct.
        const params = new HttpParams().set('filters', JSON.stringify({id: id, name: name, label: label, mode: mode}));

        return this.http.get(this.config.getAPIHostname() + '/docker/networks', {params: params, responseType: 'json'})
            .pipe(map(x => {
                    return <Network>x;
                }), catchError((err: HttpErrorResponse) => {
                    return ErrorObservable.create(<NetworkError>err.status);
                })
            );
    }

    public inspectNetwork(id: string, verbose: boolean): Observable<Network> {
        // TODO:(CDuPlooy) Encoding of json object in params is not correct.
        const params = new HttpParams().set('filters', JSON.stringify({verbose: verbose, scope: ''}));

        return this.http.get(this.config.getAPIHostname() + '/docker/networks/' + id, {params: params, responseType: 'json'})
            .pipe(map(x => {
                    return <Network>x;
                }), catchError((err: HttpErrorResponse) => {
                    return ErrorObservable.create(<NetworkError>err.status);
                })
            );
    }

    public deleteNetwork(id: string): Observable<JSON> {
        return this.http.delete(this.config.getAPIHostname() + '/docker/networks/' + id, {responseType: 'json'})
            .pipe(map(x => {
                    return x;
                }), catchError((err: HttpErrorResponse) => {
                    return ErrorObservable.create(<NetworkError>err.status);
                })
            );
    }

    // TODO:(CDuPlooy): Create a network query parameters not working. ( Encoding of json object )

    public connectContainer(network_id: string, container_id: string): Observable<JSON> {
        // TODO:(CDuPlooy): Add IPAM parameter.

        return this.http.post(this.config.getAPIHostname() + '/docker/networks/' + network_id + '/connect',
            {Container: container_id}, {responseType: 'json'})
            .pipe(map(x => {
                    return x;
                }), catchError((err: HttpErrorResponse) => {
                    return ErrorObservable.create(<NetworkError>err.status);
                })
            );
    }

    public disconnectContainer(network_id: string, container_id: string, force: boolean): Observable<JSON> {
        // TODO:(CDuPlooy): Add IPAM parameter.

        return this.http.post(this.config.getAPIHostname() + '/docker/networks/' + network_id + '/disconnect',
            {Container: container_id, Force: force}, {responseType: 'json'})
            .pipe(map(x => {
                    return x;
                }), catchError((err: HttpErrorResponse) => {
                    return ErrorObservable.create(<NetworkError>err.status);
                })
            );
    }

    public prune(): Observable<JSON> {
        return this.http.post(this.config.getAPIHostname() + '/docker/networks/prune', {responseType: 'json'})
            .pipe(map(x => {
                    return x;
                }), catchError((err: HttpErrorResponse) => {
                    return ErrorObservable.create(<NetworkError>err.status);
                })
            );
    }
}
