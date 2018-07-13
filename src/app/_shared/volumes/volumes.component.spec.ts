import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumesComponent } from '_shared/volumes/volumes.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('VolumesComponent', () => {
  let component: VolumesComponent;
  let fixture: ComponentFixture<VolumesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VolumesComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
