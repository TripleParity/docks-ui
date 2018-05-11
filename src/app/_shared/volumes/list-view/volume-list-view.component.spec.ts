import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeListViewComponent } from './volume-list-view.component';

describe('VolumeListViewComponent', () => {
  let component: VolumeListViewComponent;
  let fixture: ComponentFixture<VolumeListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
