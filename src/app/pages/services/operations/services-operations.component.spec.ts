import { async, inject, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from '../../../services/services/services.service';
import { RouterTestingModule } from '@angular/router/testing';
import { TokenStorage } from '../../../classes/tokenstorage/tokenstorage';
import { ConfigurationService } from 'services/configuration/configuration.service';
import { ToastrService, ToastrModule } from 'ngx-toastr';

describe('ServicesOperationsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, ToastrModule.forRoot()],
      providers: [ConfigurationService,
        ServicesService,
        TokenStorage,
        ToastrService,
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
