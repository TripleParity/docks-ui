import { TestBed, async, inject } from "@angular/core/testing";

import { AuthGuard } from "./auth.guard";
import { RouterTestingModule } from "@angular/router/testing";
import { AuthService } from "../_services/auth/auth.service";
import { ConfigurationService } from "../_services";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { TokenStorage } from "../_classes";

describe("AuthGuard", () => {
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
        TokenStorage
      ]
    });
  });

  it("should ...", inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
