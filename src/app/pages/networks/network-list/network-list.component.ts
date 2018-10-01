import {
  NetworkService,
  NetworkError,
} from './../../../services/network/network.service';
import { Component, OnInit } from '@angular/core';
import { Network } from 'app/models/network/network.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-network-list',
  templateUrl: './network-list.component.html',
  styleUrls: ['./network-list.component.css'],
})
export class NetworkListComponent implements OnInit {
  public rows: Network[] = [];
  public temp = [];
  public loadingIndicator = true;
  public selected = [];

  constructor(
    private networksService: NetworkService,
    private toastr: ToastrService,
    private router: Router
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

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return (
        d.Name.toLowerCase().indexOf(val) !== -1 ||
        d.Image.toLowerCase().indexOf(val) !== -1 ||
        !val
      );
    });
  }

  onSelect({ selected }) {
    // console.log('Select Event', selected, this.selected);
    this.router.navigate(['/networks/' + selected[0].ID]);
  }
}
