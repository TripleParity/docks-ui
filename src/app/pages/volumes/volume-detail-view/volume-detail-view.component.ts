import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { VolumeService } from 'services/volume/volume.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-volume-detail-view',
  templateUrl: './volume-detail-view.component.html',
  styleUrls: ['./volume-detail-view.component.css'],
})
export class VolumeDetailViewComponent implements OnInit {

  public volumeName: String;
  public selected = [];

  constructor(
    private router: Router,
    private volumeService: VolumeService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.volumeName = params.get('networkID');
      this.fetchVolume();
    });
  }

  fetchVolume() {

  }
}
