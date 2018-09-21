import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackDetailViewComponent } from './stack-detail-view.component';
import { NgbModule, NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { StackService } from 'services/stack/stack.service';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { ConfigurationService } from 'services/configuration/configuration.service';
import { TokenStorage } from 'classes/tokenstorage/tokenstorage';

describe('StackDetailViewComponent', () => {
  let component: StackDetailViewComponent;
  let fixture: ComponentFixture<StackDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StackDetailViewComponent],
      imports: [
        NgbModule.forRoot(),
        RouterTestingModule,
        NgxDatatableModule,
        ToastrModule.forRoot(),
      ],
      providers: [
        StackService,
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
    fixture = TestBed.createComponent(StackDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
