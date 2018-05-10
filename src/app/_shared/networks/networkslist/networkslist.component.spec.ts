import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { NetworkslistComponent } from './networkslist.component';
import {ConfigurationService, MockService, NetworkService, ServicesService} from '../../../_services';
import {HttpClientModule} from '@angular/common/http';

describe('NetworkslistComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [ ConfigurationService, NetworkService ],
            imports: [ HttpClientModule]
        });
    }));

    it('should be created', inject( [NetworkService], (net: NetworkService) => {
        expect(net).toBeTruthy();
    }));
});
