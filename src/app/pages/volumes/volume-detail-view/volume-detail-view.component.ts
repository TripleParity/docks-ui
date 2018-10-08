import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { VolumeService, VolumeError } from 'services/volume/volume.service';
import { ToastrService } from 'ngx-toastr';
import { Volume } from 'app/models/volume/volume.model';
import { debug } from 'util';

@Component({
  selector: 'app-volume-detail-view',
  templateUrl: './volume-detail-view.component.html',
  styleUrls: ['./volume-detail-view.component.css'],
})
export class VolumeDetailViewComponent implements OnInit {
  public volumeName: string;
  public volumeModel: Volume;
  public labels: string[];
  public isLoaded = false;

  constructor(
    private router: Router,
    private volumeService: VolumeService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.volumeName = params.get('volumeID');
      this.fetchVolume();
    });
  }

  fetchVolume() {
    this.volumeService.inspectVolumes(this.volumeName).subscribe(
      (volume) => {
        this.volumeModel = volume;
        this.isLoaded = true;
        this.labels = this.getLabels();
      },
      (err: VolumeError) => {
        this.toastr.error(err.message, 'An error occured');
      }
    );
  }

  getLabels(): string[] {
    const enumerableKeys = [];
    // tslint:disable-next-line:forin
    for (const key in this.volumeModel.Labels) {
      enumerableKeys.push(key);
    }

    return enumerableKeys;
  }
}
