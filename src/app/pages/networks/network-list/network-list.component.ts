import { NetworkService } from './../../../services/network/network.service';
import { Component, OnInit } from '@angular/core';
import { Network } from 'app/models/network/network.model';

@Component({
  selector: 'app-network-list',
  templateUrl: './network-list.component.html',
  styleUrls: ['./network-list.component.css']
})
export class NetworkListComponent implements OnInit {

  public rows: Network[] = [];
  public loadingIndicator = true;

  constructor(private networksService: NetworkService) { }

  ngOnInit() {
    this.networksService.getNetworks().subscribe(
      (data: Network[]) => {
        this.rows = data;
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
