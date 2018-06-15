import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { UserBarComponent, NavbarComponent } from '../_shared';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../_services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ConfigurationService } from '../_services';
import { TokenStorage } from '../_classes';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, UserBarComponent, NavbarComponent],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [AuthService, ConfigurationService, TokenStorage],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
