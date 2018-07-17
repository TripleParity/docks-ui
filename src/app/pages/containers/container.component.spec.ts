import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainersComponent } from '_shared/containers/containers.component';
import {
  ConfigurationService,
  ContainerService,
  MockService,
  TaskService,
} from 'app/_services';
import { RouterTestingModule } from '@angular/router/testing';
import { TokenStorage } from 'app/_classes';
import { HttpClientModule } from '@angular/common/http';

describe('ContainerComponent', () => {
  let component: ContainersComponent;
  let fixture: ComponentFixture<ContainersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContainersComponent],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [
        ContainerService,
        TaskService,
        MockService,
        ConfigurationService,
        TokenStorage,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
