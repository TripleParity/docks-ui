import { Component, OnInit } from '@angular/core';
import { Service } from '../../../models/service/service.model';
import { Formatter } from '../../../classes/formatter/formatter';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from '../../../services/services/services.service';
import { MockService } from '../../../services/mock/mock.service';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';

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
  public removeId = String;
  public isCollapsed: Boolean[] = [];
  public previous = 0;
  public isLoaded = false;

  public temp = [];
    public rows: any[] = [];
    public columns: any = [
        {prop: 'Name'},
        {prop: 'ID'},
        {prop: 'stack'},
        {prop: 'Image'},
        {prop: 'Mode'},
        {prop: 'Replicas'},
        {prop: 'Ports'},
        {prop: 'CreatedAt'},
        {prop: 'UpdatedAt'},
        {prop: 'Ownership'}
    ];

  ngOnInit() {
    this.serviceService.getServices().subscribe((services) => {
      this.services = services;
      console.log(services);
      this.rows = this.services;
      this.temp = [...this.rows];
      for (let i = 0; i < this.services.length; i++) {
        this.isCollapsed.push(false);
      }
      this.isLoaded = true;
    });

  }

  parseInput(services: Service) {
    this.rows['Name'] = services.Spec.Name;
    this.rows['ID'] = services.ID;
    this.rows['Stack'] = 'Needed';
    this.rows['Image'] = services.Spec.TaskTemplate.ContainerSpec.Image;
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
    this.removeId = id;
    this.modalService.open(removeConfirm, { size: 'sm' });
  }

  public Collapse(i) {
    if (i !== this.previous) {
      this.isCollapsed[this.previous] = false;
      this.isCollapsed[i] = !this.isCollapsed[i];
      this.previous = i;
    } else {
      this.isCollapsed[i] = !this.isCollapsed[i];
    }
  }

  updateFilter(event) {
  }

  alertme() {
    console.log('works!');
  }
}
