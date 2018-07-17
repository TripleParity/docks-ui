import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StacksCreateComponent } from './stacks-create.component';

describe('StacksCreateComponent', () => {
  let component: StacksCreateComponent;
  let fixture: ComponentFixture<StacksCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StacksCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StacksCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
