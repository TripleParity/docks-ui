import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ConfigurationService, MockService } from "app/_services";
import { RouterTestingModule } from "@angular/router/testing";
import { TokenStorage } from "app/_classes";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "_services/auth/auth.service";
import { NavbarComponent } from "app/_shared";

describe("NavbarComponent", () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [AuthService, MockService, ConfigurationService, TokenStorage]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
