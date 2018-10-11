import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NetworkService, NetworkError } from 'services/network/network.service';
import { Network } from 'app/models/network/network.model';
import { Formatter } from 'classes/formatter/formatter';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { debuglog } from 'util';

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
    private toastr: ToastrService,
    private modalService: NgbModal
  ) {}

  public networkID: string;
  public networkModel: Network;
  public isLoaded = false;
  public subnet: string;
  public gateway: string;
  public activeModal: NgbModalRef;

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
        this.subnet = network.IPAM.Config[0].Subnet;
        this.gateway = network.IPAM.Config[0].Gateway;
      },
      (err: NetworkError) => {
        this.toastr.error(err.message, 'An error occured');
      }
    );
  }

  public PrettifyDateTime(buff: string): string {
    return Formatter.PrettifyDateTime(buff);
  }

  removeNetwork() {
    this.networkService.deleteNetwork(this.networkID).subscribe(
      (network) => {
        this.toastr.success(
          'Network ' + this.networkModel.Name + ' was successfully removed'
        );
        this.activeModal.close();
        this.router.navigate(['/networks']);
      },
      (result: NetworkError) => {
        this.toastr.error(
            result.message,
            'Could not delete network ' + this.networkModel.Name
          );
          this.activeModal.close();
      }
    );
  }

  open(content) {
    this.activeModal = this.modalService.open(content);
  }
}
