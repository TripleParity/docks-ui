import { TestBed, inject } from '@angular/core/testing';

import { TaskService, ConfigurationService, MockService } from '../../../services';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TokenStorage } from '../../../classes/tokenstorage/tokenstorage';

describe('TaskListViewComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, RouterTestingModule],
            providers: [ConfigurationService, TaskService, MockService, TokenStorage],
        });
    });

    it('should be created', inject([TaskService], (service: TaskService) => {
        expect(service).toBeTruthy();
    }));
});
