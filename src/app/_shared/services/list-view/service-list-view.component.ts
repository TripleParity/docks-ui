import { Component, OnInit } from '@angular/core';
import { Service } from '../../../_models';
import { Formatter } from '../../../_classes';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService, MockService } from '../../../_services';

@Component({
  selector: 'app-service-list-view',
  templateUrl: './service-list-view.component.html',
  styleUrls: ['./service-list-view.component.css'],
})
export class ServiceListViewComponent implements OnInit {
  constructor(
    private mock: MockService,
    private serviceService: ServicesService,
    private modalService: NgbModal
  ) {}

  public services: Service[] = [];
  public removeeId = String;
  public isLoaded = false;

  ngOnInit() {
        this.serviceService.getServices().subscribe((services) => {
            this.services = services;
          });
          this.isLoaded = true;
  }

  public removeService(id) {
    this.serviceService.deleteService(id).subscribe((x) => {
      this.services.filter((service) => service.ID !== id);
    });
    // I (FJMentz) would rather test this with adult supervision
    console.log('Removing container ' + id);
  }

  public voidParentClick(event) {
    event.stopPropagation();
  }

  public PrettifyDateTime(buff: string): string {
    return Formatter.PrettifyDateTime(buff);
  }

  public loadModal(removeConfirm, id, event) {
    this.voidParentClick(event);
    this.removeeId = id;
    this.modalService.open(removeConfirm, { size: 'sm' });
  }
}
