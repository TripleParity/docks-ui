import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VolumeService } from '../../../services/volume/volume.service';
import { MockService } from '../../../services/mock/mock.service';
import { Observable } from 'rxjs/Observable';
import { Volume } from '../../../models/volume/volume.model';

@Component({
  selector: 'app-volume-operations',
  templateUrl: './volume-operations.component.html',
  styleUrls: ['./volume-operations.component.css'],
})
export class VolumeOperationsComponent implements OnInit {
  public view: Volume;
  public ins: Observable<Volume>;

  constructor(
    private route: ActivatedRoute,
    private service: VolumeService,
    private mock: MockService
  ) {}

  ngOnInit() {}

  public inspect() {
    // console.log("7359fb400f7fa159baa402a249882a7ccfdf0846f8efac30c4528208e554ac5b");
    this.service
      .inspectVolumes(
        '7359fb400f7fa159baa402a249882a7ccfdf0846f8efac30c4528208e554ac5b'
      )
      .subscribe((x) => {
        console.log(x);
        alert(x.Name);
      });
  }

  public warnings() {
    this.service.getWarnings().subscribe(
      (x) => {
        console.log(x);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
