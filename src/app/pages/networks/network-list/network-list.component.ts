import {
  NetworkService,
  NetworkError,
} from './../../../services/network/network.service';
import { Component, OnInit } from '@angular/core';
import { Network } from 'app/models/network/network.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-network-list',
  templateUrl: './network-list.component.html',
  styleUrls: ['./network-list.component.css'],
})
export class NetworkListComponent implements OnInit {
  public rows: Network[] = [];
  public loadingIndicator = true;

  constructor(
    private networksService: NetworkService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.networksService.getNetworks().subscribe(
      (data: Network[]) => {
        this.rows = data;
      },
      (err: NetworkError) => {
        console.error(err.message);
        this.toastr.error(err.message, 'An error ocurred');
      }
    );
  }
}
