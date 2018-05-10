import { TestBed, inject } from '@angular/core/testing';

import {ServicesService, ConfigurationService, MockService} from '../../../_services';
import {HttpClientModule} from '@angular/common/http';

describe('ServiceService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ConfigurationService, ServicesService, MockService],
            imports: [HttpClientModule],
        });
    });

    it('should be created', inject([ServicesService], (service: ServicesService) => {
        expect(service).toBeTruthy();
    }));
});
