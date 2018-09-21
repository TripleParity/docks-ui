import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLogsComponent } from './service-logs.component';
import { ServicesService } from 'services/services/services.service';
import { NgbModule, NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { ConfigurationService } from 'services/configuration/configuration.service';
import { TokenStorage } from 'classes/tokenstorage/tokenstorage';
import { SpinnerModule } from 'app/shared/spinner/spinner.module';

describe('ServiceLogsComponent', () => {
  let component: ServiceLogsComponent;
  let fixture: ComponentFixture<ServiceLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceLogsComponent],
      imports: [
        NgbModule.forRoot(),
        RouterTestingModule,
        NgxDatatableModule,
        SpinnerModule,
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
    fixture = TestBed.createComponent(ServiceLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
