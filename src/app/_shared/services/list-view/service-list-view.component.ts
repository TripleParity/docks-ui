import { Component, OnInit } from '@angular/core';
import { Service } from '../../../_models';
import {MockService} from '../../../_services';
import {ServicesService} from '../../../_services/services/services.service';
// TODO(FJMentz): Do date stuff (commented)
// import { Formatter } from '../../../_classes';

@Component({
  selector: 'app-service-list-view',
  templateUrl: './service-list-view.component.html',
  styleUrls: ['./service-list-view.component.css']
})
export class ServiceListViewComponent implements OnInit {

  constructor(private mock: MockService, private service: ServicesService) { }

  public services: Service[] = [];
  ngOnInit() {
    this.mock.getServices().subscribe(services => {
      const service: Service = services[0];
    });
  }

}
