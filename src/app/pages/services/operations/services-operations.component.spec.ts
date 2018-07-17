import { async, inject, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from '../../../services/services/services.service';
import { RouterTestingModule } from '@angular/router/testing';
import { TokenStorage } from '../../../classes/tokenstorage/tokenstorage';
import { ConfigurationService } from 'services/configuration/configuration.service';

describe('ServicesOperationsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [ConfigurationService, ServicesService, TokenStorage],
    });
  }));

  it('should be created', inject(
    [ServicesService],
    (service: ServicesService) => {
      expect(service).toBeTruthy();
    }
  ));
});
