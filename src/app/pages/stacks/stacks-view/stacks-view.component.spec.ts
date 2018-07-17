import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StacksViewComponent } from './stacks-view.component';

describe('StacksViewComponent', () => {
  let component: StacksViewComponent;
  let fixture: ComponentFixture<StacksViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StacksViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StacksViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
