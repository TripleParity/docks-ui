import { NetworkService } from 'services/network/network.service';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkListComponent } from './network-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { ConfigurationService } from 'services/configuration/configuration.service';
import { TokenStorage } from 'app/classes/tokenstorage/tokenstorage';
import { ToastrModule } from 'ngx-toastr';

describe('NetworkListComponent', () => {
  let component: NetworkListComponent;
  let fixture: ComponentFixture<NetworkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NetworkListComponent],
      imports: [
        NgbModule.forRoot(),
        RouterTestingModule,
        NgxDatatableModule,
        ToastrModule.forRoot(),
      ],
      providers: [
        NetworkService,
        HttpClient,
        HttpHandler,
        ConfigurationService,
        TokenStorage,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
