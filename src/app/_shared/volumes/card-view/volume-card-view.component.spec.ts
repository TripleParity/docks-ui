import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeCardViewComponent } from './volume-card-view.component';

describe('VolumeCardViewComponent', () => {
  let component: VolumeCardViewComponent;
  let fixture: ComponentFixture<VolumeCardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeCardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
