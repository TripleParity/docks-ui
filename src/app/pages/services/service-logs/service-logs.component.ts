import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServicesService } from 'services/services/services.service';

@Component({
  selector: 'app-service-logs',
  templateUrl: './service-logs.component.html',
  styleUrls: ['./service-logs.component.css']
})
export class ServiceLogsComponent implements OnInit {

  public serviceID: string;
  public Log: string;
  public serviceName: string;
  public isLoaded = false;
  public isLoadedLog = false;

  constructor(
    private serviceService: ServicesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.serviceID = params.get('serviceID');
      this.fetchService();
      this.fetchServiceLog();
    });
  }

  fetchService() {
    this.serviceService.inspectService(this.serviceID).subscribe(
      (service) => {
          this.serviceName = service.Spec.Name;
          this.isLoaded = true;
      }
    );
  }

  fetchServiceLog() {
    this.serviceService.getServiceLog(this.serviceID).subscribe(
      (service) => {
        this.Log = service;

        if (this.Log.length === 0) {
          this.Log = 'The service ' + this.serviceName + ' returned no log';
        }
        this.isLoadedLog = true;
      }
    );
  }
}
