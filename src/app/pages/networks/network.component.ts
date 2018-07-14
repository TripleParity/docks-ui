import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../../services/network/network.service';


@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  constructor(private net: NetworkService) { }

  ngOnInit() {
  }
}
