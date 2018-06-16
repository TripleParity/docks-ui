import { Injectable } from '@angular/core';

const AUTH_TOKEN = 'auth';

@Injectable()
export class TokenStorage {

    constructor() { }

    signOut() {
        window.localStorage.removeItem(AUTH_TOKEN);
        window.localStorage.clear();
    }

    saveToken(token: string, value: string) {
        window.localStorage.removeItem(token);
        window.localStorage.setItem(token,  value);
    }

    getToken(token: string): string {
        return window.localStorage.getItem(token);
    }

    removeToken(token: string) {
        window.localStorage.removeItem(token);
    }
}
