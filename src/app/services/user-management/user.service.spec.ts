import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { UserService } from './user.service';
import { ConfigurationService } from '../configuration/configuration.service';
import { TokenStorage } from '../../classes/tokenstorage/tokenstorage';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        UserService,
        HttpClient,
        HttpHandler,
        ConfigurationService,
        TokenStorage,
      ],
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
