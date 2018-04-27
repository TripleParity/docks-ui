import { TestBed, inject } from '@angular/core/testing';

import { TaskService } from './task.service';
import {ConfigurationService} from '..';
import {HttpClient, HttpClientModule} from '@angular/common/http';


describe('TaskService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ConfigurationService, TaskService],
            imports: [HttpClientModule],
        });
    });

    it('should be created', inject([TaskService], (service: TaskService) => {
        expect(service).toBeTruthy();
    }));
});
