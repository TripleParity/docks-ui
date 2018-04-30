import { Component, OnInit } from '@angular/core';
import { Service } from '../../../_models';

@Component({
  selector: 'app-service-list-view',
  templateUrl: './service-list-view.component.html',
  styleUrls: ['./service-list-view.component.css']
})
export class ServiceListViewComponent implements OnInit {

  constructor() { }

  public services: Service[] = [];
  ngOnInit() {
  }

}
