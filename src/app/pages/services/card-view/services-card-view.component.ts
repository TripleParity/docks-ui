import { Component, OnInit } from '@angular/core';
import { Formatter } from '../../../classes/formatter/formatter';
import { ServicesService } from '../../../services/services/services.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Service } from '../../../models/service/service.model';
import { Task } from '../../../models/task/task.model';

@Component({
  selector: 'app-services-card-view',
  templateUrl: './services-card-view.component.html',
  styleUrls: ['./services-card-view.component.css'],
})
export class ServicesCardViewComponent implements OnInit {
  constructor(
    private servicesService: ServicesService,
    private modalService: NgbModal
  ) {}

  public services: Service[] = [];
  public modalObject: Service;
  public modalObjectService: Service[];
  public isLoaded = false;

  ngOnInit() {
    this.servicesService.getServices().subscribe((service) => {
      for (let i = 0; i < service.length; i++) {
        this.services.push(service[i]);
        this.isLoaded = true;
      }
    });
    this.modalObjectService = [];
  }

  public PrettifyDateTime(buff: string): string {
    return Formatter.PrettifyDateTime(buff);
  }

  public loadModal(content, service) {
    this.servicesService.getServices().subscribe((services) => {
      for (let i = 0; i < services.length; i++) {
        if (services[i].ID === service.ID) {
          console.log(services[i]);
          this.modalObjectService.push(services[i]);
        }
      }
      console.log(this, this.modalObjectService);
    });
    this.modalObject = service;
    this.modalService.open(content, { size: 'lg' });
  }
}
