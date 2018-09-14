import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackDetailViewComponent } from './stack-detail-view.component';

describe('StackDetailViewComponent', () => {
  let component: StackDetailViewComponent;
  let fixture: ComponentFixture<StackDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
