import { Component, OnInit } from '@angular/core';
import { Node } from 'app/models/node/node.model';
import { NodeService } from 'services/node/node.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-node-view',
  templateUrl: './node-view.component.html',
  styleUrls: ['./node-view.component.css']
})
export class NodeViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
