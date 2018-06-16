import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const docksApiAddressKey = 'docksApiAddress';

@Injectable()
export class ConfigurationService {
  private apiHostname: string = null;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    window.localStorage.removeItem(docksApiAddressKey);
    this.apiHostname = window.localStorage.getItem(docksApiAddressKey);

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

    this.http.get('/config', { responseType: 'json' }).subscribe(
      data => {
        console.log(window.localStorage.getItem(docksApiAddressKey));

        // Reload the active path to enable the new Docks address
        // This is required to reload any components that have
        // requested a null address
        if (window.localStorage.getItem(docksApiAddressKey) === null) {
          const url = this.router.url;
          this.router.navigate(['refresh']).then(val1 => {
            this.router.navigate([url]).then(val2 => {
              console.log('Fixed null Docks API address: ' + (val1 && val2));
            });
          });
        }

        this.apiHostname = data['docksApiAddress'];
        console.log(
          'ConfigurationService: Docks API Address = ' + this.apiHostname
        );
        window.localStorage.setItem(docksApiAddressKey, this.apiHostname);
      },

      error => {
        console.error('Error while loading Docks API addess from /config');
        console.error(error);
      }
    );
  }
}
