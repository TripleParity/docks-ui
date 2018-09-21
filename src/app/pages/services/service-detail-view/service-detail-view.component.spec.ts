import { ServicesService } from 'services/services/services.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailViewComponent } from './service-detail-view.component';
import { NgbModule, NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { HttpHandler, HttpClient } from '@angular/common/http';
import { ConfigurationService } from 'services/configuration/configuration.service';
import { TokenStorage } from 'classes/tokenstorage/tokenstorage';

describe('ServiceDetailViewComponent', () => {
  let component: ServiceDetailViewComponent;
  let fixture: ComponentFixture<ServiceDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceDetailViewComponent],
      imports: [
        NgbModule.forRoot(),
        RouterTestingModule,
        NgxDatatableModule,
        ToastrModule.forRoot(),
      ],
      providers: [
        ServicesService,
        HttpClient,
        HttpHandler,
        ConfigurationService,
        TokenStorage,
        NgbAlertConfig,
        ToastrService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
