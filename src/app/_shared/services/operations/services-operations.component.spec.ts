import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesOperationsComponent } from './services-operations.component';

describe('ServicesOperationsComponent', () => {
  let component: ServicesOperationsComponent;
  let fixture: ComponentFixture<ServicesOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
