import { async, ComponentFixture } from '@angular/core/testing';
import { TestBed, inject } from '@angular/core/testing';
import { VolumeCardViewComponent } from './volume-card-view.component';
import {ConfigurationService, MockService, VolumeService} from '../../../_services';
import {HttpClientModule} from '@angular/common/http';

describe('VolumeListViewComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ VolumeCardViewComponent ],
            providers: [ConfigurationService, VolumeService, MockService],
            imports: [HttpClientModule],
        });
    });

    it('should be created', inject([VolumeService], (service: VolumeService) => {
        expect(service).toBeTruthy();
    }));
});
