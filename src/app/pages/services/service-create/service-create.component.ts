import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CreateService } from '../../../models/service/create/createService.model';
import { ServicesService } from '../../../services/services/services.service';

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.css'],
})
export class ServiceCreateComponent implements OnInit {
  public alreadyExists = false;
  public genericError = false;
  public submitted = true;
  model: CreateService;

  constructor(private service: ServicesService, private router: Router) {}

  ngOnInit() {}

  submit() {
    this.alreadyExists = false;
    this.genericError = false;
    this.submitted = true;

    // this.service
    // .createService()
    // .subscribe(
    // (result: CreateUserStatus) => {
    //   this.submitted = false;
    //   this.router.navigate([
    //     '/users',
    //     { createdUser: this.model.username },
    //   ]);
    // },
    // (err: CreateUserStatus) => {
    //   console.error(err);
    //   if (err === CreateUserStatus.CREATE_ERR_EXISTS) {
    //     this.alreadyExists = true;
    //     this.badUser = this.model.username;
    //   } else {
    //     this.genericError = true;
    //   }

    //   this.submitted = false;
    // }
    // );
  }
}
