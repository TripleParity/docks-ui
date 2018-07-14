import { Component, OnInit } from '@angular/core';
import { Service } from '../../../models/service/service.model';
import { Formatter } from '../../../classes/formatter/formatter';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from '../../../services/services/services.service';
import { MockService } from '../../../services/mock/mock.service';

@Component({
    selector: 'app-service-list-view',
    templateUrl: './service-list-view.component.html',
    styleUrls: ['./service-list-view.component.css']
})
export class ServiceListViewComponent implements OnInit {

    constructor(private mock: MockService, private serviceService: ServicesService, private modalService: NgbModal) { }

    public services: Service[] = [];
    public removeeId = String;
    ngOnInit() {
            this.serviceService.getServices().subscribe(services => {
                this.services = services;
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
        this.removeeId = id;
        this.modalService.open(removeConfirm, { size: 'sm' });
    }


}
