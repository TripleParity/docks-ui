import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainersComponent } from 'pages/containers/containers.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ContainerService } from 'services/container/container.service';
import { TaskService } from 'services/task/task.service';
import { MockService } from 'services/mock/mock.service';
import { ConfigurationService } from 'services/configuration/configuration.service';
import { TokenStorage } from 'app/classes/tokenstorage/tokenstorage';

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
