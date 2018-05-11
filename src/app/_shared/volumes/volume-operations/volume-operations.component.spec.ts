import { async, ComponentFixture } from '@angular/core/testing';
import { TestBed, inject } from '@angular/core/testing';
import { VolumeOperationsComponent } from './volume-operations.component';
import {ConfigurationService, MockService, VolumeService} from '../../../_services';
import {HttpClientModule} from '@angular/common/http';

describe('VolumeListViewComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ VolumeOperationsComponent ],
            providers: [ConfigurationService, VolumeService, MockService],
            imports: [HttpClientModule],
        });
    });

    it('should be created', inject([VolumeService], (service: VolumeService) => {
        expect(service).toBeTruthy();
    }));
});
