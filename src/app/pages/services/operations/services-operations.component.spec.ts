import { async, inject, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from '../../../services/services/services.service';
import { ConfigurationService, MockService} from '../../../services';
import { RouterTestingModule } from '@angular/router/testing';
import { TokenStorage } from '../../../classes/tokenstorage/tokenstorage';

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

