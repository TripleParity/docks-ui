import { Component, OnInit } from '@angular/core';
import {Service, Volume} from "../../../_models";
import { VolumeService, MockService } from '../../../_services';

@Component({
  selector: 'app-volume-list-view',
  templateUrl: './volume-list-view.component.html',
  styleUrls: ['./volume-list-view.component.css']
})
export class VolumeListViewComponent implements OnInit {

  constructor(private mock: MockService, private service: VolumeService) { }

    public volumes: Volume[] = [];
    ngOnInit() {
        this.service.getVolumes().subscribe(volumes => {
            for (let i = 0; i < volumes.length; i++) {
                this.volumes.push(volumes[i]);
            }
        });
    }

}
