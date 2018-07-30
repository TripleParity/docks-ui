import { Component, OnInit } from '@angular/core';
import { Service } from '../../../models/service/service.model';
import { Formatter } from '../../../classes/formatter/formatter';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from '../../../services/services/services.service';

@Component({
  selector: 'app-service-list-view',
  templateUrl: './service-list-view.component.html',
  styleUrls: ['./service-list-view.component.css'],
})
export class ServiceListViewComponent implements OnInit {
  constructor(
    private serviceService: ServicesService,
    private modalService: NgbModal
  ) {}

  public services: Service[] = [];
  public removeId = String;
  public isCollapsed: Boolean[] = [];
  public previous = 0;
  public isLoaded = false;
  private myObj;
  private num = 0;

  public temp = [];
  public rows: any[] = [];
  public columns: any = [
    { prop: 'Name' },
    { prop: 'ID' },
    { prop: 'Stack' },
    { prop: 'Image' },
    { prop: 'Mode' },
    { prop: 'Replicas' },
    { prop: 'Ports' },
    { prop: 'CreatedAt' },
    { prop: 'UpdatedAt' },
    { prop: 'Ownership' },
  ];

  public selected = [];
  public isSelected = false;
  public row = 0;

  ngOnInit() {
    this.fetchServices();
  }

  fetchServices() {
    this.serviceService.getServices().subscribe((services) => {
      this.services = services;
      this.rows = [];
      this.num = 0;

      services.forEach((element) => {
        this.parseInput(element);
      });

      console.log(services);

      this.temp = [this.rows];

      // Datatables needs to be "notified" about the changes to the 'rows' array.
      this.rows = [...this.rows];

      for (let i = 0; i < this.services.length; i++) {
        this.isCollapsed.push(false);
      }
      this.isLoaded = true;
    });
  }

  parseInput(services: Service) {
    let port = null;
    if (services.Spec.EndpointSpec.Ports !== undefined) {
      port = services.Spec.EndpointSpec.Ports[0].PublishedPort;
    }

    const created = this.PrettifyDateTime(services.CreatedAt);
    const updated = this.PrettifyDateTime(services.UpdatedAt);

    this.myObj = {
      Name: services.Spec.Name,
      ID: services.ID,
      Stack: '',
      Image: services.Spec.TaskTemplate.ContainerSpec.Image,
      Mode: services.Spec.EndpointSpec.Mode,
      Replicas: services.Spec.Mode.Replicated.Replicas,
      Ports: port,
      CreatedAt: created,
      UpdatedAt: updated,
      Ownership: '',
    };

    this.rows[this.num++] = this.myObj;
  }

  public removeService(id) {
    this.serviceService.deleteService(id).subscribe((x) => {
      this.services.filter((service) => service.ID !== id);
      this.fetchServices();
      // this.rows = [...this.rows];
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
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return (
        d.Name.toLowerCase().indexOf(val) !== -1 ||
        d.Image.toLowerCase().indexOf(val) !== -1 ||
        !val
      );
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    // this.table.offset = 0;
  }

  findIndex(str: string) {
    let i = 0;
    while (this.rows[i]['ID'] !== str) {
      i++;
    }
    return i++;
  }

  onSelect({ selected }) {
    // console.log('Select Event', selected, this.selected);
    if (this.isSelected) {
      this.isSelected = false;
    } else {
      this.isSelected = true;
    }

    this.row = this.findIndex(this.selected[0]['ID']);
    // console.log(this.row);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }
}
