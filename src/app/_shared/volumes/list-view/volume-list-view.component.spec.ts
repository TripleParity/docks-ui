import { async, ComponentFixture } from '@angular/core/testing';
import { TestBed, inject } from '@angular/core/testing';
import { VolumeListViewComponent } from './volume-list-view.component';
import {ConfigurationService, MockService, VolumeService} from '../../../_services';
import {HttpClientModule} from '@angular/common/http';

describe('VolumeListViewComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ VolumeListViewComponent ],
            providers: [ConfigurationService, VolumeService, MockService],
            imports: [HttpClientModule],
        });
    });

    it('should be created', inject([VolumeService], (service: VolumeService) => {
        expect(service).toBeTruthy();
    }));
});
