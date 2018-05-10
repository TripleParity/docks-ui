import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumesComponent } from './volumes.component';
import {ConfigurationService, MockService} from '../../_services';
import {VolumeService} from '../../_services/volume/volume.service';
import {HttpClientModule} from '@angular/common/http';

describe('VolumesComponent', () => {
  let component: VolumesComponent;
  let fixture: ComponentFixture<VolumesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumesComponent ],
      providers: [ConfigurationService, VolumeService, MockService],
      imports: [HttpClientModule],
    })
    .compileComponents();
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
