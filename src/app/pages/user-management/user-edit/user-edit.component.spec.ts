import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { UserService } from "app/user-management/shared/user.service";
import { HttpClient, HttpHandler } from "@angular/common/http";

import { UserEditComponent } from "./user-edit.component";
import { ConfigurationService } from "app/_services";
import { TokenStorage } from "app/_classes";

describe("UserEditComponent", () => {
  let component: UserEditComponent;
  let fixture: ComponentFixture<UserEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserEditComponent],
      imports: [
        NgbModule.forRoot(),
        ReactiveFormsModule,
        RouterTestingModule,
        FormsModule
      ],
      providers: [
        UserService,
        HttpClient,
        HttpHandler,
        ConfigurationService,
        TokenStorage
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
