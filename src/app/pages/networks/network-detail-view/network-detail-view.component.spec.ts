import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkDetailViewComponent } from './network-detail-view.component';
import { NgbModule, NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NetworkService } from 'services/network/network.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ConfigurationService } from 'services/configuration/configuration.service';
import { TokenStorage } from 'classes/tokenstorage/tokenstorage';

describe('NetworkDetailViewComponent', () => {
  let component: NetworkDetailViewComponent;
  let fixture: ComponentFixture<NetworkDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NetworkDetailViewComponent],
      imports: [
        NgbModule.forRoot(),
        RouterTestingModule,
        ToastrModule.forRoot(),
      ],
      providers: [
        NetworkService,
        HttpClient,
        HttpHandler,
        ConfigurationService,
        TokenStorage,
        NgbAlertConfig,
        ToastrService
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
