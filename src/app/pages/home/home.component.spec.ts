import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeComponent } from "./home.component";
import { UserBarComponent, NavbarComponent } from "_shared/index";
import { RouterTestingModule } from "@angular/router/testing";
import { AuthService } from "_services/auth/auth.service";
import { HttpClientModule } from "@angular/common/http";
import { ConfigurationService } from "_services/configuration/configuration.service";
import { TokenStorage } from "_classes/index";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, UserBarComponent, NavbarComponent],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [AuthService, ConfigurationService, TokenStorage]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
