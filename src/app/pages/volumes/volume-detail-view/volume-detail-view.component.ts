import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { VolumeService, VolumeError } from 'services/volume/volume.service';
import { ToastrService } from 'ngx-toastr';
import { Volume } from 'app/models/volume/volume.model';
import { debug } from 'util';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  public activeModal: NgbModalRef;
  public forceDelete = false;

  constructor(
    private router: Router,
    private volumeService: VolumeService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private modalService: NgbModal
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

  removeVolume() {
    this.volumeService.deleteVolume(this.volumeName, this.forceDelete).subscribe(
      (volume) => {
        this.toastr.success('Volume ' + this.volumeName + ' was successfully removed');
        this.activeModal.close();
        this.router.navigate(['/volumes']);
      },
      (result: VolumeError) => {
        this.toastr.error(result.message, 'Could not remove volume ' + this.volumeName);
        this.activeModal.close();
      }
    );
  }

  open(content) {
    this.activeModal = this.modalService.open(content);
  }
}
