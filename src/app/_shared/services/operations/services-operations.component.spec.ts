import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { ServicesOperationsComponent } from './services-operations.component';
import {HttpClientModule} from '@angular/common/http';
import {ServicesService} from '../../../_services/services/services.service';
import {ConfigurationService, MockService} from '../../../_services';
import {ActivatedRoute} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TokenStorage } from '../../../_classes';

describe('ServicesOperationsComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, RouterTestingModule],
            providers: [ ConfigurationService, ServicesService, TokenStorage],
        });
    }));

    it('should be created', inject([ServicesService ], (service: ServicesService) => {
        expect(service).toBeTruthy();
    }));
});

