import { Injectable } from '@angular/core';

const AUTH_TOKEN = 'auth';

@Injectable()
export class TokenStorage {

    constructor() { }

    signOut() {
        window.localStorage.removeItem(AUTH_TOKEN);
        window.localStorage.clear();
    }

    public saveToken(token: string, value: string) {
        window.localStorage.removeItem(token);
        window.localStorage.setItem(token,  value);
    }

    public getToken(token: string): string {
        return window.localStorage.getItem(token);
    }


}
