import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { UserService } from '../../../services/user-management/user.service';
import { ConfigurationService } from '../../../services/configuration/configuration.service';
import { TokenStorage } from '../../../classes/tokenstorage/tokenstorage';
import { UserCreateComponent } from './user-create.component';
import { ToastrService, ToastrModule } from 'ngx-toastr';

describe('UserCreateComponent', () => {
  let component: UserCreateComponent;
  let fixture: ComponentFixture<UserCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserCreateComponent],
      imports: [NgbModule, FormsModule, RouterTestingModule, ToastrModule.forRoot()],
      providers: [
        UserService,
        HttpClient,
        HttpHandler,
        ConfigurationService,
        TokenStorage,
        ToastrService,
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
