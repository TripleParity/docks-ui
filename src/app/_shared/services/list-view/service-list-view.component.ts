import { Component, OnInit } from '@angular/core';
import { Service } from '../../../_models';
import {MockService} from '../../../_services';
import {ServicesService} from '../../../_services/services/services.service';

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
        for (let i = 0; i < services.length; i++) {
            this.services.push(services[i]);
        }
    });
  }

  public removeService(id, event) {
      this.voidParentClick(event);
      // this.service.deleteService(id);
      // I (FJMentz) would rather test this with adult supervision
      console.log('Removing container ' + id);
  }

  public voidParentClick(event) {
      event.stopPropagation();
  }

}
