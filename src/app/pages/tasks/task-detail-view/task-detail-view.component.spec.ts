import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailViewComponent } from './task-detail-view.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SpinnerModule } from 'app/shared/spinner/spinner.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { TaskService } from 'services/task/task.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ConfigurationService } from 'services/configuration/configuration.service';
import { TokenStorage } from 'classes/tokenstorage/tokenstorage';
import { ServicesService } from 'services/services/services.service';

describe('TaskDetailViewComponent', () => {
  let component: TaskDetailViewComponent;
  let fixture: ComponentFixture<TaskDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskDetailViewComponent],
      imports: [RouterTestingModule, SpinnerModule, ToastrModule.forRoot()],
      providers: [
        TaskService,
        ServicesService,
        HttpClient,
        HttpHandler,
        ConfigurationService,
        TokenStorage,
        ToastrService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
