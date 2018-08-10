import { Component, OnInit } from '@angular/core';
import { Volume } from 'app/models/volume/volume.model';

@Component({
  selector: 'app-volumes-view',
  templateUrl: './volumes-view.component.html',
  styleUrls: ['./volumes-view.component.css']
})
export class VolumesViewComponent implements OnInit {

  public volumes: Volume[];
  public createdVolume = '';
  public deletedVolume = '';
  public volumeNotFoundError = '';
  public genericError = false;

  constructor() { }

  ngOnInit() {
  }

  clearAlerts() {
    this.createdVolume = '';
    this.volumeNotFoundError = '';
    this.deletedVolume = '';
    this.genericError = false;
  }
}
