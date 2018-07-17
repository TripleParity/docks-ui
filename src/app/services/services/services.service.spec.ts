import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { ServicesService } from './services.service';
import { ConfigurationService } from '../configuration/configuration.service';
import { TokenStorage } from '../../classes/tokenstorage/tokenstorage';

describe('ServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [ServicesService, ConfigurationService, TokenStorage],
    });
  });

  it('should be created', inject(
    [ServicesService],
    (service: ServicesService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('should have all functions', inject(
    [ServicesService],
    (service: ServicesService) => {
      expect(service.createService).toBeTruthy();
      expect(service.deleteService).toBeTruthy();
      expect(service.getServiceLog).toBeTruthy();
      expect(service.getServices).toBeTruthy();
      expect(service.inspectService).toBeTruthy();
      expect(service.scaleService).toBeTruthy();
      expect(service.updateService).toBeTruthy();
    }
  ));
});
