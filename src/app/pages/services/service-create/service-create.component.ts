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

  namePopulated = true;
  imagePopulated = true;
  portPopulated = true;

  alreadyExists = false;
  genericError = false;
  passwordHolder2 = '';

  submitted = false;
  badUser = '';

  model: CreateService = null;
  constructor(private service: ServicesService, private router: Router) { }

  ngOnInit() {
    this.model.Name = '';
    this.model.image = null;
    this.model.ports = null;
  }

  submit() {
    this.alreadyExists = false;
    this.genericError = false;
    this.submitted = true;

    this.service
      .createService()
      .subscribe(
        
  }

}
