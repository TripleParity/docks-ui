import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumesViewComponent } from './volumes-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { VolumeService } from 'services/volume/volume.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ConfigurationService } from 'services/configuration/configuration.service';
import { TokenStorage } from 'app/classes/tokenstorage/tokenstorage';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SpinnerModule } from 'app/shared/spinner/spinner.module';
import { ToastrService, ToastrModule } from 'ngx-toastr';

describe('VolumesViewComponent', () => {
  let component: VolumesViewComponent;
  let fixture: ComponentFixture<VolumesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VolumesViewComponent],
      imports: [
        NgbModule.forRoot(),
        ReactiveFormsModule,
        RouterTestingModule,
        FormsModule,
        NgxDatatableModule,
        SpinnerModule,
        ToastrModule.forRoot(),
      ],
      providers: [
        VolumeService,
        HttpClient,
        HttpHandler,
        ConfigurationService,
        TokenStorage,
        ToastrService
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
