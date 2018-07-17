import { TestBed, inject } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";

import { TaskService } from "./task.service";
import { ConfigurationService } from "..";
import { TokenStorage } from "../../_classes";

describe("TaskService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [ConfigurationService, TaskService, TokenStorage]
    });
  });

  it("should be created", inject([TaskService], (service: TaskService) => {
    expect(service).toBeTruthy();
  }));

  it("should have all functions", inject(
    [TaskService],
    (service: TaskService) => {
      expect(service.getLog).toBeTruthy();
      expect(service.getTasks).toBeTruthy();
      expect(service.inspect).toBeTruthy();
    }
  ));
});
