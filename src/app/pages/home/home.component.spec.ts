import { TaskService } from './../../services/task/task.service';
import { TokenStorage } from 'app/classes/tokenstorage/tokenstorage';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfigurationService } from 'services/configuration/configuration.service';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { GraphService } from '../../services/graphs/graph.service';

import { NetworkService } from '../../services/network/network.service';
import { VolumeService } from '../../services/volume/volume.service';
import { NodeService } from '../../services/node/node.service';
import { ServicesService } from '../../services/services/services.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule],
      providers: [
        NodeService,
        ServicesService,
        GraphService,
        NetworkService,
        HttpClient,
        HttpHandler,
        ConfigurationService,
        TokenStorage,
        TaskService,
        VolumeService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
