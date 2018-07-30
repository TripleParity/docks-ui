/**
 * Handles configuration of the running instance.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationService {
  constructor() {}

  /**
   * Return the Docks Address stored in memory
   */
  public getAPIHostname(): string {
    return null;
  }

  /**
   * Downloads the Docks API address from /config and stores it in local storage.
   * If the address is not in local storage the current page will be "refreshed"
   * by the router.
   */
  public fetchAPIHostname() {}
}
