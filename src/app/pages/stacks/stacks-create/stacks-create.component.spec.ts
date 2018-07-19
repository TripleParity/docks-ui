import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StacksCreateComponent } from './stacks-create.component';
import { NgbModule, NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StackService } from 'services/stack/stack.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ConfigurationService } from 'services/configuration/configuration.service';
import { TokenStorage } from 'app/classes/tokenstorage/tokenstorage';

describe('StacksCreateComponent', () => {
  let component: StacksCreateComponent;
  let fixture: ComponentFixture<StacksCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StacksCreateComponent],
      imports: [FormsModule, NgbModule, RouterTestingModule],
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
    fixture = TestBed.createComponent(StacksCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
