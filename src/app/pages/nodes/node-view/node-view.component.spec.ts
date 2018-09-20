import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeViewComponent } from './node-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NodeService } from 'services/node/node.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ConfigurationService } from 'services/configuration/configuration.service';
import { TokenStorage } from 'app/classes/tokenstorage/tokenstorage';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SpinnerModule } from 'app/shared/spinner/spinner.module';
import { ToastrService, ToastrModule } from 'ngx-toastr';


describe('NodeViewComponent', () => {
  let component: NodeViewComponent;
  let fixture: ComponentFixture<NodeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeViewComponent ],
      imports: [
        NgbModule.forRoot(),
        ReactiveFormsModule,
        RouterTestingModule,
        FormsModule,
        NgxDatatableModule,
        SpinnerModule,
        ToastrModule.forRoot(),
      ],
      providers: [
        NodeService,
        HttpClient,
        HttpHandler,
        ConfigurationService,
        TokenStorage,
        ToastrService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
