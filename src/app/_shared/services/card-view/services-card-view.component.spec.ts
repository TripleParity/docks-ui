import {async, inject, TestBed} from '@angular/core/testing';

import {HttpClientModule} from '@angular/common/http';
import {ServicesService, ConfigurationService, MockService } from '../../../_services';

describe('ServicesCardViewComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
          providers: [ ConfigurationService, ServicesService, MockService ],
          imports: [HttpClientModule],
        });
    }));

    it('should be created', inject( [ServicesService], (service: ServicesService) => {
        expect(service).toBeTruthy();
    }));
});
