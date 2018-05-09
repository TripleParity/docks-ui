import { Component, OnInit } from '@angular/core';
import {Formatter} from '../../../_classes';
import {MockService } from '../../../_services';
import {ServicesService} from '../../../_services/services/services.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Service} from '../../../_models';

@Component({
    selector: 'app-services-card-view',
    templateUrl: './services-card-view.component.html',
    styleUrls: ['./services-card-view.component.css']
})
export class ServicesCardViewComponent implements OnInit {

    constructor(private servicesService: ServicesService, private mockService: MockService, private modalService: NgbModal) { }

    public services: Service[] = [];
    public modalObject: Service;
    public modalObjectLog: string;

    ngOnInit() {
        this.mockService.getServices().subscribe((service) => {
            for (let i = 0; i < service.length; i++) {
                this.services.push(service[i]);
            }
        });
    }

    public PrettifyDateTime(buff: string): string {
        return Formatter.PrettifyDateTime(buff);
    }


    public loadModal(content, service) {
        this.modalObject = service;
        this.modalService.open(content, { size: 'lg' });
        this.mockService.getLog(this.modalObject.ID).subscribe((log) => {
            this.modalObjectLog = log;
        });
    }

    public copyToClip() {
        // TODO(FJMentz) : Implement this
    }

}
