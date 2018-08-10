import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumesCreateComponent } from './volumes-create.component';

describe('VolumesCreateComponent', () => {
  let component: VolumesCreateComponent;
  let fixture: ComponentFixture<VolumesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
