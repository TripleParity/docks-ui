import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackEditComponent } from './stack-edit.component';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { StackService } from 'services/stack/stack.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ConfigurationService } from 'services/configuration/configuration.service';
import { TokenStorage } from 'app/classes/tokenstorage/tokenstorage';
import { ToastrService, ToastrModule } from 'ngx-toastr';

import { AceEditorModule } from 'ng2-ace-editor';

describe('StackEditComponent', () => {
  let component: StackEditComponent;
  let fixture: ComponentFixture<StackEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StackEditComponent],
      imports: [
        FormsModule,
        NgbModule.forRoot(),
        RouterTestingModule,
        ToastrModule.forRoot(),
        AceEditorModule,

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
    fixture = TestBed.createComponent(StackEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
