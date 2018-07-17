import { async, ComponentFixture } from '@angular/core/testing';
import { TestBed, inject } from '@angular/core/testing';
import { VolumeCardViewComponent } from '_shared/volumes/card-view/volume-card-view.component';
import {
  ConfigurationService,
  MockService,
  VolumeService,
} from 'app/_services';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TokenStorage } from 'app/_classes';

describe('VolumeCardViewComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [
        ConfigurationService,
        VolumeService,
        MockService,
        TokenStorage,
      ],
    });
  });

  it('should be created', inject([VolumeService], (service: VolumeService) => {
    expect(service).toBeTruthy();
  }));
});
