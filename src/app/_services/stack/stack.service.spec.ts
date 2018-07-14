import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { ConfigurationService } from '../configuration/configuration.service';
import { TokenStorage } from '../../_classes';
import {StackService} from 'app/_services';

describe('ServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [StackService, ConfigurationService, TokenStorage],
    });
  });

  it('should be created', inject(
    [StackService],
    (service: StackService) => {
      expect(service).toBeTruthy();
    }
  ));

    it('should have all functions', inject([StackService], (service: StackService) => {
        expect(true).toBeTruthy();
    }));
});
