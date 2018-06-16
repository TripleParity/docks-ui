import { async, ComponentFixture } from '@angular/core/testing';
import { TestBed, inject } from '@angular/core/testing';
import { VolumeOperationsComponent } from './volume-operations.component';
import {ConfigurationService, MockService, VolumeService} from '../../../_services';
import {HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('VolumeOperationsComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, RouterTestingModule],
            providers: [ConfigurationService, VolumeService, MockService],
        });
    });

    it('should be created', inject([VolumeService], (service: VolumeService) => {
        expect(service).toBeTruthy();
    }));
});
