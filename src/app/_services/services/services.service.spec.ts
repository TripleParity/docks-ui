import { TestBed, inject } from '@angular/core/testing';
import { ServicesService } from './services.service';
import {HttpClientModule} from '@angular/common/http';
import {ConfigurationService} from '..';

describe('ServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicesService, ConfigurationService],
      imports: [HttpClientModule],
    });
  });

  it('should be created', inject([ServicesService], (service: ServicesService) => {
    expect(service).toBeTruthy();
  }));
});
