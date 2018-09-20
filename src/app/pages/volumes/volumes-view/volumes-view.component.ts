import { Component, OnInit } from '@angular/core';
import { Volume } from 'app/models/volume/volume.model';
import { VolumeService, VolumeError } from 'services/volume/volume.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-volumes-view',
  templateUrl: './volumes-view.component.html',
  styleUrls: ['./volumes-view.component.css'],
})
export class VolumesViewComponent implements OnInit {
  public volumes: Volume[];
  public searchString = [];
  public isLoaded = false;

  constructor(
    private volumeService: VolumeService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.fetchVolumes();
  }

  getRowHeight(row) {
    return (row.height = 50);
  }

  fetchVolumes() {
    this.volumeService.getVolumes().subscribe(
      (volumes: Volume[]) => {
        this.volumes = volumes;
        this.searchString = [...volumes];
        this.isLoaded = true;
      },
      (err: VolumeError) => {
        this.toastr.error(err.message, 'An error occured');
      }
    );
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.searchString.filter((volume: Volume) => {
      return volume.Name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.volumes = temp;
  }
}
