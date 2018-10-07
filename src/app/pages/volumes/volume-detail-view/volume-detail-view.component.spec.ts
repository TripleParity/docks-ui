import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeDetailViewComponent } from './volume-detail-view.component';
import { NgbModule, NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpHandler } from '@angular/common/http/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ConfigurationService } from 'services/configuration/configuration.service';
import { TokenStorage } from 'classes/tokenstorage/tokenstorage';
import { VolumeService } from 'services/volume/volume.service';

describe('VolumeDetailViewComponent', () => {
  let component: VolumeDetailViewComponent;
  let fixture: ComponentFixture<VolumeDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VolumeDetailViewComponent],
      imports: [
        NgbModule.forRoot(),
        RouterTestingModule,
        ToastrModule.forRoot(),
      ],
      providers: [
        VolumeService,
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
    fixture = TestBed.createComponent(VolumeDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
