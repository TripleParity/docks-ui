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

  public services: any[] = [];
  public removeId = String;
  public isCollapsed: Boolean[] = [];
  public previous = 0;
  public isLoaded = false;

  public searchString = [];

  public selected = [];
  public isSelected = false;
  public row = 0;

  ngOnInit() {
    this.fetchServices();
  }

  fetchServices() {
    this.serviceService.getServices().subscribe(
      (services: Service[]) => {
        this.services = services;

        this.prettyfyServices();

        // Datatables needs to be "notified" about the changes to the 'rows' array.
        this.searchString = [...this.services];

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

  prettyfyServices(){
    this.services.forEach(element => {
      let port = null;
      if (element.Spec.EndpointSpec.Ports !== undefined) {
        port = element.Spec.EndpointSpec.Ports[0].PublishedPort;
      } else {
        port = '-';
      }

      element.Spec.EndpointSpec.Ports = port;

      element.CreatedAt = this.PrettifyDateTime(element.CreatedAt);
      element.UpdatedAt = this.PrettifyDateTime(element.UpdatedAt);
      let replicated: string = null;

      // Handle optional Modes
      if ('Global' in element.Spec.Mode) {
        replicated = 'Global';
      } else if ('Replicated' in element.Spec.Mode) {
        replicated = element.Spec.Mode.Replicated.Replicas.toString();
      }

      element.Spec.Mode.Replicated.Replicas = replicated;

      element.Spec.TaskTemplate.ContainerSpec.Image = element.Spec.TaskTemplate.ContainerSpec.Image.split('@')[0]

    });
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
    const temp = this.searchString.filter((service: Service) => {
    return (
        service.Spec.Name.toLowerCase().indexOf(val) !== -1 ||
        // service.Spec.TaskTemplate.ContainerSpec.Image.toLowerCase().indexOf(val) !== -1 ||
        !val
      );
    });

    // update the rows
    this.services = temp;
    // Whenever the filter changes, always go back to the first page
    // this.table.offset = 0;
  }

  findIndex(str: string) {
      let i = 0;
      while (this.services[i]['ID'] !== str) {
        i++;
      }
      return i++;
    }

  onSelect({ selected }) {
    this.router.navigate(['/services/' + selected[0].ID]);
  }
}
