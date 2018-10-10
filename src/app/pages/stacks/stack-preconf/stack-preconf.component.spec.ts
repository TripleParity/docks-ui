import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackPreconfComponent } from './stack-preconf.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('StackPreconfComponent', () => {
  let component: StackPreconfComponent;
  let fixture: ComponentFixture<StackPreconfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StackPreconfComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackPreconfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
