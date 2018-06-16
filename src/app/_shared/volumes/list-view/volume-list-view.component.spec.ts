import { async, ComponentFixture } from '@angular/core/testing';
import { TestBed, inject } from '@angular/core/testing';
import {VolumeListViewComponent } from './volume-list-view.component';
import {ConfigurationService, MockService, VolumeService} from '../../../_services';
import {HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { StorageService } from '../../../_services/storage/storage.service';

describe('VolumeListViewComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, RouterTestingModule],
            providers: [ConfigurationService, VolumeService, MockService, StorageService],
        });
    });

    it('should be created', inject([VolumeService], (service: VolumeService) => {
        expect(service).toBeTruthy();
    }));
});
