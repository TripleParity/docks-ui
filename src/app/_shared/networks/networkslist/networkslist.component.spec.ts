import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkslistComponent } from './networkslist.component';

describe('NetworkslistComponent', () => {
  let component: NetworkslistComponent;
  let fixture: ComponentFixture<NetworkslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
