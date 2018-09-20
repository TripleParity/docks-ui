import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebhookCreateComponent } from './webhook-create.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { VolumeService } from 'services/volume/volume.service';

import { HttpHandler, HttpClient } from '@angular/common/http';
import { ConfigurationService } from 'services/configuration/configuration.service';
import { TokenStorage } from 'app/classes/tokenstorage/tokenstorage';
import { ToastrService, ToastrModule } from 'ngx-toastr';

describe('WebhookCreateComponent', () => {
  let component: WebhookCreateComponent;
  let fixture: ComponentFixture<WebhookCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WebhookCreateComponent],
      imports: [
        NgbModule.forRoot(),
        ReactiveFormsModule,
        RouterTestingModule,
        FormsModule,
        ToastrModule.forRoot(),
      ],
      providers: [
        VolumeService,
        HttpClient,
        HttpHandler,
        ConfigurationService,
        TokenStorage,
        ToastrService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebhookCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
