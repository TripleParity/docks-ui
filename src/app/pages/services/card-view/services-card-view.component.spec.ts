import { async, inject, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { TokenStorage } from '../../../classes/tokenstorage/tokenstorage';
import { ConfigurationService } from 'services/configuration/configuration.service';
import { ServicesService } from 'services/services/services.service';
import { MockService } from 'services/mock/mock.service';

describe('ServicesCardViewComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [
        ConfigurationService,
        ServicesService,
        MockService,
        TokenStorage,
      ],
    });
  }));

  it('should be created', inject(
    [ServicesService],
    (service: ServicesService) => {
      expect(service).toBeTruthy();
    }
  ));
});
