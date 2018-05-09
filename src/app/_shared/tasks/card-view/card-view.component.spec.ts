import {async, inject, TestBed} from '@angular/core/testing';

import {ConfigurationService, TaskService, MockService} from '../../../_services';
import {HttpClientModule} from '@angular/common/http';

describe('CardViewComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
          providers: [ConfigurationService, TaskService, MockService],
            imports: [HttpClientModule],
        });
    }));

    it('should be created', inject([TaskService], (service: TaskService) => {
        expect(service).toBeTruthy();
    }));
});
