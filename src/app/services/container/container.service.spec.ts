import { TestBed, inject } from "@angular/core/testing";

import { ContainerService } from "./container.service";
import { ConfigurationService } from "..";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { TokenStorage } from "../../_classes";

describe("ContainerService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [ConfigurationService, ContainerService, TokenStorage]
    });
  });

  it("should be created", inject(
    [ContainerService],
    (service: ContainerService) => {
      expect(service).toBeTruthy();
    }
  ));
  it("should have all functions", inject(
    [ContainerService],
    (service: ContainerService) => {
      expect(service.getContainer).toBeTruthy();
    }
  ));
});
