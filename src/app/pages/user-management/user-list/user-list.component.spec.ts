import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { ConfigurationService } from '../../../services/configuration/configuration.service';
import { TokenStorage } from '../../../classes/tokenstorage/tokenstorage';
import { UserService } from '../../../services/user-management/user.service';
import { UserListComponent } from './user-list.component';
import { ToastrService, ToastrModule } from 'ngx-toastr';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent],
      imports: [
        NgbModule.forRoot(),
        ReactiveFormsModule,
        RouterTestingModule,
        FormsModule,
        NgxDatatableModule,
        ToastrModule.forRoot(),
      ],
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
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
