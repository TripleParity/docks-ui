import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StacksViewComponent } from './stacks-view.component';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { StackService } from 'services/stack/stack.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ConfigurationService } from 'services/configuration/configuration.service';
import { TokenStorage } from 'app/classes/tokenstorage/tokenstorage';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

describe('StacksViewComponent', () => {
  let component: StacksViewComponent;
  let fixture: ComponentFixture<StacksViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StacksViewComponent],
      imports: [
        FormsModule,
        NgbModule.forRoot(),
        RouterTestingModule,
        NgxDatatableModule,
      ],
      providers: [
        StackService,
        HttpClient,
        HttpHandler,
        ConfigurationService,
        TokenStorage,
        NgbAlertConfig,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StacksViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
