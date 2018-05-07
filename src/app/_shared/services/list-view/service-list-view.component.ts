import { Component, OnInit } from '@angular/core';
import { Service } from '../../../_models';
import {MockService} from '../../../_services';
// TODO(FJMentz): Do date stuff (commented)
// import { Formatter } from '../../../_classes';

@Component({
  selector: 'app-service-list-view',
  templateUrl: './service-list-view.component.html',
  styleUrls: ['./service-list-view.component.css']
})
export class ServiceListViewComponent implements OnInit {

  constructor(private mock: MockService) { }

  public services: Service[] = [];
  ngOnInit() {
    // this.mock.getServices().subscribe((services) => {
    //   this.services = services;
    // });
  }

    // public PrettifyDateTime(buff: string): string {
    //     return Formatter.PrettifyDateTime(buff);
    // }


}
