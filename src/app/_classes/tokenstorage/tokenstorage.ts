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

    /**
     * Returns a value from the local storage
     * @param token The key used to store the value
     * @return {null} if no value was stored with the key
     * @return the value stored using the key
     */
    public getToken(token: string): string {
        return window.localStorage.getItem(token);
    }
}
