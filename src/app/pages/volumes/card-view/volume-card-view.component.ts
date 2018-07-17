import { Component, OnInit } from '@angular/core';
import { VolumeService } from '../../../services/volume/volume.service';
import { MockService } from '../../../services/mock/mock.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Volume } from '../../../models/volume/volume.model';

@Component({
  selector: 'app-volume-card-view',
  templateUrl: './volume-card-view.component.html',
  styleUrls: ['./volume-card-view.component.css'],
})
export class VolumeCardViewComponent implements OnInit {
  constructor(
    private service: VolumeService,
    private mock: MockService,
    private modal: NgbModal
  ) {}

  public volumes: Volume[] = [];
  public modalObject: Volume;
  public modalObjectTasks: Volume[];
  public isLoaded = false;
  public isLoadedModal = false;

  ngOnInit() {
    this.service.getVolumes().subscribe((volume) => {
      for (let i = 0; i < volume.length; i++) {
        this.volumes.push(volume[i]);
        this.isLoaded = true;
      }
    });
    this.modalObjectTasks = [];
  }

  public loadModal(content, volume) {
    this.isLoadedModal = false;
    setTimeout(() => {
      this.service.getVolumes().subscribe((volumes) => {
        for (let i = 0; i < volumes.length; i++) {
          if (volumes[i].Name === volume.Name) {
            console.log(volumes[i]);
            this.modalObjectTasks.push(volumes[i]);
            this.isLoadedModal = true;
          }
        }
      });
    }, 8000);
    this.modalObject = volume;
    this.modal.open(content, { size: 'lg' });
  }
}
