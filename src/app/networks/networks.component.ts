import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {DockerService} from '../_services/docker.service';

@Component({
  selector: 'app-networks',
  templateUrl: './networks.component.html',
  styleUrls: ['./networks.component.css']
})
export class NetworksComponent implements OnInit {

  constructor(private dockerService: DockerService) { }
  public networks: any[] = [];

  ngOnInit() {
      this.getNetworks();
      Observable.interval(10000).subscribe(() => {
          this.getNetworks();
      });
  }

  public getNetworks() {
      const obvs: Observable<string> = this.dockerService.getNetworks();
      obvs.subscribe((data) => {
          for (let i = 0; i < data['length']; i++) {
             console.log(data[i]['IPAM']['Config'][0]['Subnet']);
             this.networks.push(data[i]);
            }
          }, (err) => console.log(err));
  }

}
