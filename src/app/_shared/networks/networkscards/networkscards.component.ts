import { Component, OnInit } from '@angular/core';
import {MockService, NetworkService} from '../../../_services';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Network, Service, Task, Volume} from '../../../_models';

@Component({
  selector: 'app-networkscards',
  templateUrl: './networkscards.component.html',
  styleUrls: ['./networkscards.component.css']
})
export class NetworkscardsComponent implements OnInit {

  constructor(private service: NetworkService, private mock: MockService, private modal: NgbModal) { }

  public networks: Network[] = [];
  public modalObject: Network;
  public modalObjectTasks: Network[];

  ngOnInit() {
      this.service.getNetworks().subscribe((network) => {
            for (let i = 0; i < network.length; i++) {
                this.networks.push(network[i]);
            }
        });
        this.modalObjectTasks = [];
  }

    public loadModal(content, network) {
        this.service.getNetworks().subscribe( (net) => {
            for (let i = 0; i < net.length; i++) {
                if (net[i].Name === network.Name) {
                    console.log(net[i]);
                    this.modalObjectTasks.push(net[i]);
                }
            }
        });
        this.modalObject = network;
        this.modal.open(content, { size: 'lg' });
    }
}

