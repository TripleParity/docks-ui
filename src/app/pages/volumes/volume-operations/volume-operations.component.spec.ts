import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TokenStorage } from '../../../classes/tokenstorage/tokenstorage';
import { ConfigurationService } from 'services/configuration/configuration.service';
import { VolumeService } from 'services/volume/volume.service';
import { MockService } from 'services/mock/mock.service';

describe('VolumeOperationsComponent', () => {
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
