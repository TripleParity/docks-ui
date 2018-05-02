import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCardViewComponent } from './card-view.component';

describe('CardViewComponent', () => {
  let component: TaskCardViewComponent;
  let fixture: ComponentFixture<TaskCardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskCardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
