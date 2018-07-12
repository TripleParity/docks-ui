import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { UserService } from 'app/user-management/shared/user.service';
import { ConfigurationService } from 'app/_services';
import { TokenStorage } from 'app/_classes';
import { UserCreateComponent } from './user-create.component';

describe('UserCreateComponent', () => {
  let component: UserCreateComponent;
  let fixture: ComponentFixture<UserCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserCreateComponent],
      imports: [NgbModule, FormsModule, RouterTestingModule],
      providers: [
        UserService,
        HttpClient,
        HttpHandler,
        ConfigurationService,
        TokenStorage,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
