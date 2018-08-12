import { HttpClient, HttpHandler } from '@angular/common/http';
import { ConfigurationService } from 'services/configuration/configuration.service';
import { ServicesService } from './../../../services/services/services.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCreateComponent } from './service-create.component';
import { TokenStorage } from 'app/classes/tokenstorage/tokenstorage';
import { RouterTestingModule } from '@angular/router/testing';

describe('ServiceCreateComponent', () => {
  let component: ServiceCreateComponent;
  let fixture: ComponentFixture<ServiceCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceCreateComponent],
      imports: [RouterTestingModule],
      providers: [
        ServicesService,
        ConfigurationService,
        TokenStorage,
        HttpClient,
        HttpHandler,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
