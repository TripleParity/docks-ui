import { TestBed, async, inject } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../services/auth/auth.service';
import { ConfigurationService } from '../../services/configuration/configuration.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TokenStorage } from '../../classes/tokenstorage/tokenstorage';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthGuard,
        RouterTestingModule,
        AuthService,
        ConfigurationService,
        HttpClient,
        HttpHandler,
        TokenStorage,
      ],
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
