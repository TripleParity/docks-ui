import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { MockService, VolumeService } from "../../_services/index";
import { VolumeListViewComponent } from "./list-view/volume-list-view.component";
import { VolumesRoutingModule } from "./volumes.routing-module";
import { VolumeCardViewComponent } from "./card-view/volume-card-view.component";
import { TokenStorage } from "../../_classes";
import { VolumesComponent } from "./volumes.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { VolumeOperationsComponent } from "_shared/volumes/volume-operations/volume-operations.component";
import { SpinnerComponent } from "_shared/spinner/spinner.component";
import { SharedSpinnerModule } from "_shared/spinner/shared-spinner/shared-spinner.module";

@NgModule({
  imports: [CommonModule, VolumesRoutingModule, NgbModule, SharedSpinnerModule],
  declarations: [
    VolumesComponent,
    VolumeOperationsComponent,
    VolumeListViewComponent,
    VolumeCardViewComponent
  ],
  providers: [HttpClientModule, MockService, VolumeService, TokenStorage]
})
export class VolumesModule {}
