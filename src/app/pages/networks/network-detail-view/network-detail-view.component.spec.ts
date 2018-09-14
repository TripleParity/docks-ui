import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkDetailViewComponent } from './network-detail-view.component';

describe('NetworkDetailViewComponent', () => {
  let component: NetworkDetailViewComponent;
  let fixture: ComponentFixture<NetworkDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
