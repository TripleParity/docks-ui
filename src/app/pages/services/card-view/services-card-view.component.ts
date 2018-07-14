import { Component, OnInit } from '@angular/core';
import { Formatter } from '../../../classes/formatter/formatter';
import { ServicesService } from '../../../services/services/services.service';
import { MockService } from '../../../services/mock/mock.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Service } from '../../../models/service/service.model';
import { Task } from '../../../models/task/task.model';

@Component({
    selector: 'app-services-card-view',
    templateUrl: './services-card-view.component.html',
    styleUrls: ['./services-card-view.component.css']
})
export class ServicesCardViewComponent implements OnInit {

    constructor(private servicesService: ServicesService, private mockService: MockService, private modalService: NgbModal) { }

    public services: Service[] = [];
    public modalObject: Service;
    public modalObjectTasks: Task[];

    ngOnInit() {
        this.mockService.getServices().subscribe((service) => {
            for (let i = 0; i < service.length; i++) {
                this.services.push(service[i]);
            }
        });
        this.modalObjectTasks = [];
    }

    public PrettifyDateTime(buff: string): string {
        return Formatter.PrettifyDateTime(buff);
    }


    public loadModal(content, service) {
        this.mockService.getTasks().subscribe( (tasks) => {
           for (let i = 0; i < tasks.length; i++) {
               if (tasks[i].ServiceID === service.ID) {
                   console.log(tasks[i]);
                   this.modalObjectTasks.push(tasks[i]);
               }
           }
        });
        this.modalObject = service;
        this.modalService.open(content, { size: 'lg' });
    }
}
