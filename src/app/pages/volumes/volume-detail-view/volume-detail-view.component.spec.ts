import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeDetailViewComponent } from './volume-detail-view.component';

describe('VolumeDetailViewComponent', () => {
  let component: VolumeDetailViewComponent;
  let fixture: ComponentFixture<VolumeDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VolumeDetailViewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
