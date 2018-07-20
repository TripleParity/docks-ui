import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CreateService } from '../../../models/service/create/createService.model';
import { ServicesService } from '../../../services/services/services.service';

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.css']
})
export class ServiceCreateComponent implements OnInit {
  constructor(private service: ServicesService, private router: Router) { }

  ngOnInit() {
  }
}
