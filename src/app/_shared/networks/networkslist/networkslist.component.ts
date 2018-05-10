import { Component, OnInit } from '@angular/core';
import {NetworkService} from '../../../_services';
import {Network} from '../../../_models';

@Component({
  selector: 'app-networkslist',
  templateUrl: './networkslist.component.html',
  styleUrls: ['./networkslist.component.css']
})
export class NetworkslistComponent implements OnInit {

  constructor(private net: NetworkService) { }
  public networks: Network[];

  ngOnInit() {
      this.net.getNetworks().subscribe(result => {
          this.networks = result;
          console.log(this.networks);
      }, err => console.log(err));

  }

}
