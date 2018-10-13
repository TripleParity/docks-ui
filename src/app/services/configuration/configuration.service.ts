/**
 * Handles configuration of the running instance.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenStorage } from '../../classes/tokenstorage/tokenstorage';

const docksApiAddressKey = 'docksApiAddress';

@Injectable()
export class ConfigurationService {
  private apiHostname: string = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenStorage: TokenStorage
  ) {
    this.apiHostname = this.tokenStorage.getToken(docksApiAddressKey);

    this.fetchAPIHostname();
  }

  /**
   * Return the Docks Address stored in memory
   */
  public getAPIHostname(): string {
    if (this.apiHostname === null) {
      console.error(
        'Docks API Address has not been set yet. The request will fail.'
      );
    }

    return this.apiHostname;
  }

  /**
   * Downloads the Docks API address from /config and stores it in local storage.
   * If the address is not in local storage the current page will be "refreshed"
   * by the router.
   */
  public fetchAPIHostname() {
    let currentUrl: string = window.location.href;

    // Need to match the following url and patch the port
    // http://ip172-18-0-8-bf132dc9cs9g00ffpcog-4200.direct.labs.play-with-docker.com/login
    // NOTE: API port is hardcoded here

    if (currentUrl.includes('direct.labs.play-with-docker.com')) {
      currentUrl = currentUrl.split('/')[0];
      currentUrl = currentUrl.replace('4200.direct', '8080.direct');

      if (this.tokenStorage.getToken(docksApiAddressKey) === null) {
        this.refreshPage();
      }

      console.log('Setting Docks API address to ', currentUrl);
      this.apiHostname = currentUrl;
      this.tokenStorage.saveToken(docksApiAddressKey, this.apiHostname);
    } else {
      this.http.get('/config', { responseType: 'json' }).subscribe(
        (data: Object) => {
          // "Reload" the active path to enable the new Docks address
          // This is required to reload any components that have
          // requested a null address
          if (this.tokenStorage.getToken(docksApiAddressKey) === null) {
            this.refreshPage();
          }

          console.log('Setting Docks API address to ', data['docksApiAddress']);
          this.apiHostname = data['docksApiAddress'];
          this.tokenStorage.saveToken(docksApiAddressKey, this.apiHostname);
        },

        (error: any) => {
          const errorString: string = error.toString();
          const errorParts: string[] = errorString.split('\n');

          // This error appears to only occur when executing using `ng test`
          // TODO(egeldenhuys): Fix whatever is causing this error
          if (
            errorParts[0] ===
            'TypeError: _this.handler.handle is not a function'
          ) {
            console.warn(
              'ConfigurationService::fetchAPIHostname(): Suppressed "TypeError: _this.handler.handle is not a function"'
            );
          } else {
            console.error('Error while loading Docks API address from /config');
            console.error(error);
          }
        }
      );
    }
  }

  public refreshPage() {
    console.log(
      'Refreshing page to trigger possible failed requests to Docks API'
    );

    const url = this.router.url;
    this.router
      .navigate(['refresh'])
      .then((val1: boolean) => {
        this.router
          .navigate([url])
          .then((val2: boolean) => {
            console.log('Fixed null Docks API address');
          })
          .catch((err2: any) => {
            console.error('Error navigating to ' + url);
            console.error(err2);
          });
      })
      .catch((err1: any) => {
        console.error('Error while navigating to "/refresh"');
        console.error(err1);
      });
  }
}
