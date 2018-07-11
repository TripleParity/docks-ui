/**
 * Storage service used for saving tokens using local storage.
 */

import { Injectable } from '@angular/core';

const authTokenKey = 'auth';

@Injectable()
export class StorageService {

  constructor() { }

  signOut() {
      window.localStorage.removeItem(authTokenKey);
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
