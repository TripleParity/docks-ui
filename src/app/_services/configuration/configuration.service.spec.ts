import { TestBed, inject } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClient, HttpHandler } from "@angular/common/http";

import { ConfigurationService } from "./configuration.service";
import { TokenStorage } from "../../_classes";
import { RefreshComponent } from "app/refresh/refresh.component";
import { Routes } from "@angular/router";
import { ContainerService } from "_services/container/container.service";

const routes: Routes = [
  { path: "refresh", component: RefreshComponent },
  { path: "", redirectTo: "", pathMatch: "full" }
];

describe("ConfigurationService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefreshComponent],
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [ConfigurationService, HttpClient, HttpHandler, TokenStorage]
    });
  });

  it("should be created", inject(
    [ConfigurationService],
    (service: ConfigurationService) => {
      expect(service).toBeTruthy();
    }
  ));

  it("should have all functions", inject(
    [ConfigurationService],
    (service: ConfigurationService) => {
      expect(service.getAPIHostname).toBeTruthy();
      expect(service.fetchAPIHostname).toBeTruthy();
    }
  ));
});
