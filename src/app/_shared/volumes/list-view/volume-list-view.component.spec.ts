import { async, ComponentFixture } from "@angular/core/testing";
import { TestBed, inject } from "@angular/core/testing";
import { VolumeListViewComponent } from "_shared/volumes/list-view/volume-list-view.component";
import {
  ConfigurationService,
  MockService,
  VolumeService
} from "app/_services";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { TokenStorage } from "app/_classes";

describe("VolumeListViewComponent", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [
        ConfigurationService,
        VolumeService,
        MockService,
        TokenStorage
      ]
    });
  });

  it("should be created", inject([VolumeService], (service: VolumeService) => {
    expect(service).toBeTruthy();
  }));
});
