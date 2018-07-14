import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { TaskService } from './task.service';
import { ConfigurationService } from '../../services/configuration/configuration.service';
import { TokenStorage } from '../../classes/tokenstorage/tokenstorage';

describe('TaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [ConfigurationService, TaskService, TokenStorage],
    });
  });

  it('should be created', inject([TaskService], (service: TaskService) => {
    expect(service).toBeTruthy();
  }));
});
