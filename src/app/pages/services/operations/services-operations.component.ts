import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceSpec } from '../../../models/service/spec/spec.model';
import { Service } from '../../../models/service/service.model';
import {
  ServicesService,
  ServiceError,
} from '../../../services/services/services.service';
import { MockService } from '../../../services/mock/mock.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-services-operations',
  templateUrl: './services-operations.component.html',
  styleUrls: ['./services-operations.component.css'],
})
export class ServicesOperationsComponent implements OnInit {
  public serv: Service = null;
  public serviceLog: String;
  public allDataFetched = false;
  public currentJustify = 'justified';
  constructor(
    private route: ActivatedRoute,
    private serviceService: ServicesService,
    private mock: MockService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.serviceService.inspectService(res.id).subscribe(
        (serv) => {
          this.serv = serv;
          this.serviceService.getServiceLog(res.id).subscribe(
            (log) => {
              this.serviceLog = log;
              this.allDataFetched = true;
            },
            (err: ServiceError) => {
              this.toastr.error(err.message, 'Error retrieving logs');
            }
          );
        },
        (err: ServiceError) => {
          this.toastr.error(err.message, 'Error getting details');
        }
      );
    });
  }
}
