import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ConfigurationService {

    // Default docks api address
    private api_hostname = 'http://localhost:8080';

    constructor(private http: HttpClient) {

        this.http.get('/config', {responseType: 'json'}).subscribe(
            (data) => {
                this.api_hostname = data['docksApiAddress'];
                console.log('Docks API Address: ' + data);
                },
            (error) => {
                console.error(error);
            }
        );

    }

    public getAPIHostname(): string {
        return this.api_hostname;
    }

    public setAPIHostname(hostname: string) {
        this.api_hostname = hostname;
        // Perhaps introduce an observable that fires everytime this value is changed
        // for more complicated components. I don't really see a use case so I'm leaving this comment.

        // Check if host is reachable before assigning the hostname ?
    }
}
