import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { ConfigurationService } from './configuration.service';
import { TokenStorage } from '../../classes/tokenstorage/tokenstorage';
import { RefreshComponent } from '../../pages/refresh/refresh.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: 'refresh', component: RefreshComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

describe('ConfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefreshComponent],
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [ConfigurationService, HttpClient, HttpHandler, TokenStorage],
    });
  });

  it('should be created', inject(
    [ConfigurationService],
    (service: ConfigurationService) => {
      expect(service).toBeTruthy();
    }
  ));
});
