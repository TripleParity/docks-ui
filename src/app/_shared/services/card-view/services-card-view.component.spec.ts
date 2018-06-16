import { async, inject, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import {
  ServicesService,
  ConfigurationService,
  MockService,
} from '../../../_services';
import { StorageService } from '../../../_services/storage/storage.service';

describe('ServicesCardViewComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [
        ConfigurationService,
        ServicesService,
        MockService,
        StorageService,
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
