import {TestBed, inject} from '@angular/core/testing';

import {TaskService} from './task.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('TaskService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [TaskService]
        });
    });

    it('should be created', inject([TaskService], (service: TaskService) => {
        expect(service).toBeTruthy();
    }));
});
