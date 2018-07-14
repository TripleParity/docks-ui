import { TestBed, inject } from '@angular/core/testing';
import { ConfigurationService, MockService, VolumeService } from '../../../services';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TokenStorage } from '../../../classes/tokenstorage/tokenstorage';

describe('VolumeListViewComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, RouterTestingModule],
            providers: [ConfigurationService, VolumeService, MockService, TokenStorage],
        });
    });

    it('should be created', inject([VolumeService], (service: VolumeService) => {
        expect(service).toBeTruthy();
    }));
});
