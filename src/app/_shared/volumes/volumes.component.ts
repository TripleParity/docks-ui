import { Component, OnInit } from '@angular/core';
import {NetworkService, VolumeService} from '../../_services';
import { Volume} from '../../_models';

@Component({
  selector: 'app-volumes',
  templateUrl: './volumes.component.html',
  styleUrls: ['./volumes.component.css']
})
export class VolumesComponent implements OnInit {

  constructor(private net: NetworkService) { }

  ngOnInit() {
  }

}
