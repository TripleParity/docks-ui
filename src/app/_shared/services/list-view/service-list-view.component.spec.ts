import { TestBed, inject } from '@angular/core/testing';

import {TaskService, ConfigurationService, MockService} from '../../../_services/index';
import {ServicesService} from '../../../_services/services/services.service';
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
