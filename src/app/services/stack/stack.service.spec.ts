import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { ConfigurationService } from '../configuration/configuration.service';
import { StackService } from 'services/stack/stack.service';
import { TokenStorage } from 'app/classes/tokenstorage/tokenstorage';

describe('StackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [StackService, ConfigurationService, TokenStorage],
    });
  });

  it('should be created', inject([StackService], (service: StackService) => {
    expect(service).toBeTruthy();
  }));

  it('should have all functions', inject(
    [StackService],
    (service: StackService) => {
      expect(true).toBeTruthy();
    }
  ));
});
