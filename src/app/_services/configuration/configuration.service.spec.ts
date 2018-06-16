import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { ConfigurationService } from './configuration.service';
import { StorageService } from '../storage/storage.service';

describe('ConfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [ConfigurationService, HttpClient, HttpHandler],
    });
  });

  it('should be created', inject(
    [ConfigurationService],
    (service: ConfigurationService) => {
      expect(service).toBeTruthy();
    }
  ));
});
