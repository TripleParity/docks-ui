import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBarComponent } from './user-bar.component';
import { AuthService } from '../../services/auth/auth.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ConfigurationService } from '../../services/configuration/configuration.service';
import { TokenStorage } from '../../classes/tokenstorage/tokenstorage';
import { RouterTestingModule } from '@angular/router/testing';
import {APP_BASE_HREF} from '@angular/common';

describe('UserBarComponent', () => {
  let component: UserBarComponent;
  let fixture: ComponentFixture<UserBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserBarComponent],
      providers: [
        AuthService,
        HttpClient,
        HttpHandler,
        ConfigurationService,
        TokenStorage,
        {provide: APP_BASE_HREF, useValue: '/'}
      ],
      imports: [RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
