import { Component, OnInit } from '@angular/core';
import { Service } from '../../../_models';
import {ServicesService, MockService} from '../../../_services';
import {forEach} from '@angular/router/src/utils/collection';
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
        for (let i = 0; i < services.length; i++) {
            this.services.push(services[i]);
        }
    });
  }

}
