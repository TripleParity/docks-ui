import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkCreateComponent } from './network-create.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NetworkService } from 'services/network/network.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ConfigurationService } from 'services/configuration/configuration.service';
import { TokenStorage } from 'classes/tokenstorage/tokenstorage';

describe('NetworkCreateComponent', () => {
  let component: NetworkCreateComponent;
  let fixture: ComponentFixture<NetworkCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NetworkCreateComponent],
      imports: [
        NgbModule.forRoot(),
        ReactiveFormsModule,
        RouterTestingModule,
        FormsModule,
        ToastrModule.forRoot(),
      ],
      providers: [
        NetworkService,
        HttpClient,
        HttpHandler,
        ConfigurationService,
        TokenStorage,
        ToastrService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
