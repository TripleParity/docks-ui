import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkComponent } from './network.component';
import {HttpClientModule} from '@angular/common/http';
import {MockService, NetworkService} from '../../_services';

describe('NetworkComponent', () => {
  let component: NetworkComponent;
  let fixture: ComponentFixture<NetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkComponent ],
      providers: [HttpClientModule, NetworkService, MockService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
