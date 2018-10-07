import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkCreateComponent } from './network-create.component';

describe('NetworkCreateComponent', () => {
  let component: NetworkCreateComponent;
  let fixture: ComponentFixture<NetworkCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
