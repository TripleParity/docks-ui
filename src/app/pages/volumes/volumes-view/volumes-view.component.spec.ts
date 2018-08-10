import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumesViewComponent } from './volumes-view.component';

describe('VolumesViewComponent', () => {
  let component: VolumesViewComponent;
  let fixture: ComponentFixture<VolumesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
