import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../_services/auth/auth.service';
import {TokenStorage} from '../../_classes';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
