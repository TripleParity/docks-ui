import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { ConfigurationService } from '../configuration/configuration.service';
import { TokenStorage } from '../../_classes';
import {NetworkService} from 'app/_services';

describe('NetworkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [NetworkService, ConfigurationService, TokenStorage],
    });
  });

  it('should be created', inject(
    [NetworkService],
    (service: NetworkService) => {
      expect(service).toBeTruthy();
    }
  ));

    it('should have all functions', inject([NetworkService], (service: NetworkService) => {
        expect(service.connectContainer).toBeTruthy();
        expect(service.deleteNetwork).toBeTruthy();
        expect(service.disconnectContainer).toBeTruthy();
        expect(service.getNetworks).toBeTruthy();
        expect(service.getNetworksFiltered).toBeTruthy();
        expect(service.prune).toBeTruthy();
    }));
});
