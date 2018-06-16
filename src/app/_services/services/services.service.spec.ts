import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { ServicesService } from './services.service';
import { StorageService } from '../storage/storage.service';
import { ConfigurationService } from '../configuration/configuration.service';

describe('ServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [ServicesService, ConfigurationService, StorageService],
    });
  });

  it('should be created', inject(
    [ServicesService],
    (service: ServicesService) => {
      expect(service).toBeTruthy();
    }
  ));
});
