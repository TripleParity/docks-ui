import { Component, OnInit } from '@angular/core';
import {NetworkService} from '../../_services';
import {Network} from '../../_models';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  constructor(private net: NetworkService) { }

  ngOnInit() {
      this.net.getNetworks().subscribe(networks => {
          for (const network of networks) {
              // Do something with networks
              console.log(network.Id);
          }
      });

      this.net.prune().subscribe();
  }
}
