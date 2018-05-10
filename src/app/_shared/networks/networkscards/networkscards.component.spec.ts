import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkscardsComponent } from './networkscards.component';

describe('NetworkscardsComponent', () => {
  let component: NetworkscardsComponent;
  let fixture: ComponentFixture<NetworkscardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkscardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkscardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
