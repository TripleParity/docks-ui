import {TestBed, inject} from '@angular/core/testing';

import {ContainerService} from './container.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('ContainerService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [ContainerService]
        });
    });

    it('should be created', inject([ContainerService], (service: ContainerService) => {
        expect(service).toBeTruthy();
    }));
});
