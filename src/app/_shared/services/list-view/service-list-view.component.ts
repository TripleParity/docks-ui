import { Component, OnInit } from '@angular/core';
import { Service } from '../../../_models';
import {Formatter} from '../../../_classes';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ServicesService, MockService} from '../../../_services';

@Component({
    selector: 'app-service-list-view',
    templateUrl: './service-list-view.component.html',
    styleUrls: ['./service-list-view.component.css']
})
export class ServiceListViewComponent implements OnInit {

    constructor(private mock: MockService, private serviceService: ServicesService, private modalService: NgbModal) { }

    public services: Service[] = [];
    public removeId = String;
    public isCollapsed: Boolean[] = [];
    public previous = 0;

    ngOnInit() {
            this.serviceService.getServices().subscribe(services => {
                this.services = services;
                console.log(this.services.length);
                for (let i = 0; i < this.services.length; i++) {
                    console.log('hh');
                    this.isCollapsed.push(false);
                }
        });
    }

    public removeService(id) {
        this.serviceService.deleteService(id).subscribe( x => {
           this.services.filter(service => service.ID !== id);
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

}
