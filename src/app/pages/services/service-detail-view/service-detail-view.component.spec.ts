import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailViewComponent } from './service-detail-view.component';

describe('ServiceDetailViewComponent', () => {
  let component: ServiceDetailViewComponent;
  let fixture: ComponentFixture<ServiceDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
