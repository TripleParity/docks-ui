import { Component, OnInit } from '@angular/core';
import {Service, Volume} from '../../../_models';
import { VolumeService, MockService } from '../../../_services';

@Component({
  selector: 'app-volume-list-view',
  templateUrl: './volume-list-view.component.html',
  styleUrls: ['./volume-list-view.component.css']
})
export class VolumeListViewComponent implements OnInit {

  constructor(private mock: MockService, private service: VolumeService) { }

    public volumes: Volume[] = [];
    public isLoaded = false;

    ngOnInit() {
        /* tslint:disable-next-line */
        const data = JSON.parse('{"Name":"tardis2","Labels":{"com.example.some-label":"some-value","com.example.some-other-label":"some-other-value"},"Driver":"local"}');
        this.service.createVolume(data).subscribe();

        this.service.getVolumes().subscribe(volumes => {
            this.volumes = volumes;
            // console.log(volumes);
        }, error => console.error('Error: ' + error));

        this.isLoaded = true;
    }

}
