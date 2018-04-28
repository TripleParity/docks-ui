import { TestBed, inject } from '@angular/core/testing';

import {TaskService, ConfigurationService, MockService} from '../../_services/';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('ContainerService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ConfigurationService, TaskService, MockService],
            imports: [HttpClientModule],
        });
    });

    it('should be created', inject([TaskService], (service: TaskService) => {
        expect(service).toBeTruthy();
    }));
});
