import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './auth.service';
import { ConfigurationService } from '../configuration/configuration.service';
import { TokenStorage } from '../../classes/tokenstorage/tokenstorage';
import {AuthError} from 'services/auth/auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [AuthService, TokenStorage, ConfigurationService],
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should have all functions', inject(
    [AuthService],
    (service: AuthService) => {
      expect(service.getToken).toBeTruthy();
      expect(service.isLoggedIn).toBeTruthy();
      expect(service.logout).toBeTruthy();
    }
  ));

    it('should login', inject([AuthService], (service: AuthService) => {
        service.getToken('admin', 'admin').subscribe(() => {
            expect(service.isLoggedIn()).toEqual(true);
        });
    }));

    it('should fail on invalid login', inject([AuthService], (service: AuthService) => {
        service.getToken('admin2', 'admin').subscribe(() => {
            // NOP
        }, (err) => {
            expect(err).toEqual(AuthError.AUTH_ERR_CREDENTIALS);
        });
    }));
});
