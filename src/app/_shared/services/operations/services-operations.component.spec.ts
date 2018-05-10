import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { ServicesOperationsComponent } from './services-operations.component';
import {HttpClientModule} from '@angular/common/http';
import {ServicesService} from '../../../_services/services/services.service';
import {ConfigurationService, MockService} from '../../../_services';
import {ActivatedRoute} from '@angular/router';

describe('ServiceService', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [ ConfigurationService, ServicesService ],
            imports: [HttpClientModule],
        });
    }));

    it('should be created', inject([ServicesService ], (service: ServicesService) => {
        expect(service).toBeTruthy();
    }));
});

