import { TestBed, inject } from '@angular/core/testing';

import {ServicesService, ConfigurationService, MockService} from '../../../_services';
import {HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TokenStorage } from '../../../_classes';

describe('ServicesListViewComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, RouterTestingModule],
            providers: [ConfigurationService, ServicesService, MockService, TokenStorage],
        });
    });

    it('should be created', inject([ServicesService], (service: ServicesService) => {
        expect(service).toBeTruthy();
    }));
});
