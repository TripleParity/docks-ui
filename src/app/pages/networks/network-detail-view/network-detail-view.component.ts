import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NetworkService, NetworkError } from 'services/network/network.service';
import { Network } from 'app/models/network/network.model';
import { Formatter } from 'classes/formatter/formatter';

@Component({
  selector: 'app-network-detail-view',
  templateUrl: './network-detail-view.component.html',
  styleUrls: ['./network-detail-view.component.css'],
})
export class NetworkDetailViewComponent implements OnInit {
  constructor(
    private router: Router,
    private networkService: NetworkService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  public networkID: string;
  public networkModel: Network;
  public isLoaded = false;
  public subnet: string;
  public gateway: string;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.networkID = params.get('networkID');
      this.fetchNetwork();
    });
  }

  fetchNetwork() {
    this.networkService.inspectNetwork(this.networkID).subscribe(
      (network) => {
        this.networkModel = network;
        this.isLoaded = true;
        console.log(network);
        this.subnet = network.IPAM.Config[0].Subnet;
        this.gateway = network.IPAM.Config[0].Gateway;
      },
      (err: NetworkError) => {
        console.log('this is where the error message is coming from ');
        this.toastr.error(err.message, 'An error occured');
      }
    );
  }

  public PrettifyDateTime(buff: string): string {
    return Formatter.PrettifyDateTime(buff);
  }

}
