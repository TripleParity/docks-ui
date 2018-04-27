import { TestBed, inject } from '@angular/core/testing';

import { ContainerService } from './container.service';
import {ConfigurationService} from '..';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('ContainerService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ConfigurationService, ContainerService],
            imports: [HttpClientModule],
        });
    });

    it('should be created', inject([ContainerService], (service: ContainerService) => {
        expect(service).toBeTruthy();
    }));
});
