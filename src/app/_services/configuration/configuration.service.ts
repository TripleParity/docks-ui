import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationService {
    // TODO(CDuPlooy): For now localhost:8080 seems sane enough. Maybe change it to docks-api at some point.
    private api_hostname = 'http://localhost:8080';
    constructor() { }

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
