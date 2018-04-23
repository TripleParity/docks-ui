import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainersComponent } from './containers.component';
import {ContainerService} from '../../_services/index';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {AppModule} from '../../app.module';

describe('ContainersComponent', () => {
  let component: ContainersComponent;
  let fixture: ComponentFixture<ContainersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [],
        imports: [AppModule, RouterTestingModule],
        providers: [],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log('Testing!');
    expect(component).toBeTruthy();
  });
});
