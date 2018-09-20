import { TestBed, inject } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TokenStorage } from '../../../classes/tokenstorage/tokenstorage';
import { ConfigurationService } from 'services/configuration/configuration.service';
import { ServicesService } from 'services/services/services.service';
import { MockService } from 'services/mock/mock.service';
import { ToastrService, ToastrModule } from 'ngx-toastr';

describe('ServicesListViewComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, ToastrModule.forRoot()],
      providers: [
        ConfigurationService,
        ServicesService,
        MockService,
        TokenStorage,
        ToastrService,
      ],
    });
  });

  it('should be created', inject(
    [ServicesService],
    (service: ServicesService) => {
      expect(service).toBeTruthy();
    }
  ));
});
