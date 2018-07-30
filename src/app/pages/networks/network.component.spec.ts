import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { NetworkComponent } from './network.component';
import { TokenStorage } from '../../classes/tokenstorage/tokenstorage';
import { NetworkService } from 'services/network/network.service';

import { ConfigurationService } from 'services/configuration/configuration.service';

describe('NetworkComponent', () => {
  let component: NetworkComponent;
  let fixture: ComponentFixture<NetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NetworkComponent],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [NetworkService, ConfigurationService, TokenStorage],
    }).compileComponents();
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
