import { async, inject, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import {
  ConfigurationService,
  TaskService,
  MockService,
} from '../../../services';
import { TokenStorage } from '../../../classes/tokenstorage/tokenstorage';

describe('TaskCardViewComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [ConfigurationService, TaskService, MockService, TokenStorage],
    });
  }));

  it('should be created', inject([TaskService], (service: TaskService) => {
    expect(service).toBeTruthy();
  }));
});
