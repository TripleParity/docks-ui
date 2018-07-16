import { TestBed, inject } from '@angular/core/testing';

import { ContainerService } from './container.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TokenStorage } from '../../classes/tokenstorage/tokenstorage';
import { ConfigurationService } from 'services/configuration/configuration.service';

describe('ContainerService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, RouterTestingModule],
            providers: [ConfigurationService, ContainerService, TokenStorage],
        });
    });

    it('should be created', inject([ContainerService], (service: ContainerService) => {
        expect(service).toBeTruthy();
    }));
});
