import { Component, OnInit } from '@angular/core';
import {ContainerService, TaskService} from '../../_services/index';
import {TokenStorage} from '../../_classes';
import {AuthService} from '../../_services/auth/auth.service';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.css'],
})

export class ContainersComponent implements OnInit {

  constructor(private auth: AuthService, private token: TokenStorage) { }

  ngOnInit() {
      this.auth.getToken('admin', 'admin').subscribe(() => {
          console.log(this.token.getToken('auth'));
      }, err => console.log(err));
  }

}
