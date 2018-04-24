import { Injectable } from '@angular/core';

const AUTH_TOKEN = 'auth';

@Injectable()
export class TokenStorage {

    constructor() { }

    signOut() {
        window.sessionStorage.removeItem(AUTH_TOKEN);
        window.sessionStorage.clear();
    }

    public saveToken(token: string, value: string) {
        window.sessionStorage.removeItem(token);
        window.sessionStorage.setItem(token,  value);
    }

    public getToken(token: string): string {
        return sessionStorage.getItem(token);
    }
}
