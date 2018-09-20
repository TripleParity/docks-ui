import { Component, OnInit } from '@angular/core';
import { Service } from '../../../models/service/service.model';
import { Formatter } from '../../../classes/formatter/formatter';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  ServicesService,
  ServiceError,
} from '../../../services/services/services.service';
import { MockService } from '../../../services/mock/mock.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-list-view',
  templateUrl: './service-list-view.component.html',
  styleUrls: ['./service-list-view.component.css'],
})
export class ServiceListViewComponent implements OnInit {
  constructor(
    private mock: MockService,
    private serviceService: ServicesService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private router: Router
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
    // { prop: 'Stack' },
    { prop: 'Image' },
    { prop: 'Mode' },
    { prop: 'Replicas' },
    { prop: 'Ports' },
    { prop: 'CreatedAt' },
    { prop: 'UpdatedAt' },
    // { prop: 'Ownership' },
  ];

  public selected = [];
  public isSelected = false;
  public row = 0;

  ngOnInit() {
    this.fetchServices();
  }

  fetchServices() {
    this.serviceService.getServices().subscribe(
      (services) => {
        this.services = services;
        this.rows = [];
        this.num = 0;

        services.forEach((element) => {
          this.parseInput(element);
        });

        this.temp = [this.rows];

        // Datatables needs to be "notified" about the changes to the 'rows' array.
        this.rows = [...this.rows];

        for (let i = 0; i < this.services.length; i++) {
          this.isCollapsed.push(false);
        }
        this.isLoaded = true;
      },
      (err: ServiceError) => {
        this.toastr.error(err.message, 'An error has occured');
      }
    );
  }

  parseInput(services: Service) {
    let port = null;
    if (services.Spec.EndpointSpec.Ports !== undefined) {
      port = services.Spec.EndpointSpec.Ports[0].PublishedPort;
    }

    const created = this.PrettifyDateTime(services.CreatedAt);
    const updated = this.PrettifyDateTime(services.UpdatedAt);
    let replicated: string = null;

    // Handle optional Modes
    if ('Global' in services.Spec.Mode) {
      replicated = 'Global';
    } else if ('Replicated' in services.Spec.Mode) {
      replicated = services.Spec.Mode.Replicated.Replicas.toString();
    }

    this.myObj = {
      Name: services.Spec.Name,
      ID: services.ID,
      Stack: '',
      Image: services.Spec.TaskTemplate.ContainerSpec.Image,
      Mode: services.Spec.EndpointSpec.Mode,
      Replicas: replicated,
      Ports: port,
      CreatedAt: created,
      UpdatedAt: updated,
      Ownership: '',
    };

    this.rows[this.num++] = this.myObj;
  }

  public removeService(id) {
    this.serviceService.deleteService(id).subscribe(
      (x) => {
        this.services.filter((service) => service.ID !== id);
        this.fetchServices();
        this.toastr.success('Service was successfully removed', 'Success!');
      },
      (err: ServiceError) => {
        this.toastr.error(err.message, 'Could not remove service');
      }
    );
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
    this.router.navigate(['/services/' + selected[0].ID]);
  }

}
