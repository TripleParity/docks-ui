import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { ConfigurationService } from '../configuration/configuration.service';
import { VolumeService } from 'services/volume/volume.service';
import { TokenStorage } from 'app/classes/tokenstorage/tokenstorage';

describe('VolumeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [VolumeService, ConfigurationService, TokenStorage],
    });
  });

  it('should be created', inject([VolumeService], (service: VolumeService) => {
    expect(service).toBeTruthy();
  }));

  it('should have all functions', inject(
    [VolumeService],
    (service: VolumeService) => {
      expect(service.createVolume).toBeTruthy();
      expect(service.deleteVolume).toBeTruthy();
      expect(service.getVolumes).toBeTruthy();
      expect(service.getWarnings).toBeTruthy();
      expect(service.inspectVolumes).toBeTruthy();
      expect(service.pruneVolume).toBeTruthy();
    }
  ));
});
