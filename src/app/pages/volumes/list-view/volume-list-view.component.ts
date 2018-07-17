import { Component, OnInit } from '@angular/core';
import { Volume } from '../../../models/volume/volume.model';
import { VolumeService } from '../../../services/volume/volume.service';
import { MockService } from '../../../services/mock/mock.service';

@Component({
  selector: 'app-volume-list-view',
  templateUrl: './volume-list-view.component.html',
  styleUrls: ['./volume-list-view.component.css'],
})
export class VolumeListViewComponent implements OnInit {
  constructor(private mock: MockService, private service: VolumeService) {}

  public volumes: Volume[] = [];
  public isCollapsed: Boolean[] = [];
  public previous = 0;
  public isLoaded = false;

  ngOnInit() {
    /* tslint:disable */
    const data = JSON.parse(
      '{"Name":"tardis2","Labels":{"com.example.some-label":"some-value","com.example.some-other-label":"some-other-value"},"Driver":"local"}'
    );
    /* tslint:enable */
    this.service.createVolume(data).subscribe();

    this.service.getVolumes().subscribe(
      (volumes) => {
        this.volumes = volumes;
        // console.log(volumes);
        for (let i = 0; i < this.volumes.length; i++) {
          this.isCollapsed.push(false);
        }
        this.isLoaded = true;
      },
      (error) => console.error('Error: ' + error)
    );
  }

  public Collapse(i) {
    if (i !== this.previous) {
      this.isCollapsed[this.previous] = false;
      this.isCollapsed[i] = !this.isCollapsed[i];
      this.previous = i;
    } else {
      this.isCollapsed[i] = !this.isCollapsed[i];
    }
  }
}