import { Component, OnInit } from '@angular/core';
import { Volume } from 'app/models/volume/volume.model';
import { VolumeService } from 'services/volume/volume.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-volumes-view',
  templateUrl: './volumes-view.component.html',
  styleUrls: ['./volumes-view.component.css']
})
export class VolumesViewComponent implements OnInit {

  public volumes: Volume[];
  public searchString = [];
  public createdVolume = '';
  public deletedVolume = '';
  public volumeNotFoundError = '';
  public genericError = false;

  constructor(
    private volumeService: VolumeService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.fetchVolumes();
  }

  clearAlerts() {
    this.createdVolume = '';
    this.volumeNotFoundError = '';
    this.deletedVolume = '';
    this.genericError = false;
  }

  getRowHeight(row) {
    return (row.height = 50);
  }

  fetchVolumes() {
    this.volumeService.getVolumes().subscribe(
      (volumes: Volume[]) => {
        this.volumes = volumes;
        this.searchString = [...volumes];
        console.log(this.volumes);
      },
      (err) => {
        console.error(err);
        this.genericError = true;
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
