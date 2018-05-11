import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {ConfigurationService} from '../index';
import {HttpClientModule} from '@angular/common/http';
import {ServicesService} from '../services/services.service';
import {TokenStorage} from '../../_classes';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [AuthService, TokenStorage, ConfigurationService],
        imports: [HttpClientModule],
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
