import { Component, OnInit } from '@angular/core';
import { Formatter } from '../../../_classes';
import { ServicesService, MockService } from '../../../_services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Service, Task } from '../../../_models';

@Component({
  selector: 'app-services-card-view',
  templateUrl: './services-card-view.component.html',
  styleUrls: ['./services-card-view.component.css'],
})
export class ServicesCardViewComponent implements OnInit {
  constructor(
    private servicesService: ServicesService,
    private mockService: MockService,
    private modalService: NgbModal
  ) {}

  public services: Service[] = [];
  public modalObject: Service;
  public modalObjectTasks: Task[];
  public isLoaded = false;

  ngOnInit() {
        this.mockService.getServices().subscribe((service) => {
            for (let i = 0; i < service.length; i++) {
              this.services.push(service[i]);
              this.isLoaded = true;
            }
          });
    this.modalObjectTasks = [];
  }

  public PrettifyDateTime(buff: string): string {
    return Formatter.PrettifyDateTime(buff);
  }

<<<<<<< HEAD
  public loadModal(content, service) {
    this.mockService.getTasks().subscribe((tasks) => {
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].serviceID === service.ID) {
          console.log(tasks[i]);
          this.modalObjectTasks.push(tasks[i]);
        }
      }
    });
    this.modalObject = service;
    this.modalService.open(content, { size: 'lg' });
  }
=======
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
>>>>>>> develop
}
