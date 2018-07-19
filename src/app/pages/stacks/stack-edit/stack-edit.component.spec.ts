import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackEditComponent } from './stack-edit.component';

describe('StackEditComponent', () => {
  let component: StackEditComponent;
  let fixture: ComponentFixture<StackEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
