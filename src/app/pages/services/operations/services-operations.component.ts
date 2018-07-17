import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceSpec } from '../../../models/service/spec/spec.model';
import { ServicesService } from '../../../services/services/services.service';
import { MockService } from '../../../services/mock/mock.service';

@Component({
  selector: 'app-services-operations',
  templateUrl: './services-operations.component.html',
  styleUrls: ['./services-operations.component.css'],
})
export class ServicesOperationsComponent implements OnInit {
  public spec: ServiceSpec = null;
  public serviceLog: String;
  public allDataFetched = false;
  constructor(
    private route: ActivatedRoute,
    private serviceService: ServicesService,
    private mock: MockService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.serviceService.inspectService(res.id).subscribe((serv) => {
        this.spec = serv;
        this.serviceService.getServiceLog(res.id).subscribe((log) => {
          this.serviceLog = log;
          this.allDataFetched = true;
        });
      });
    });
  }
}
