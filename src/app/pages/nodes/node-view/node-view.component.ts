import { Component, OnInit } from '@angular/core';
import { Node } from 'app/models/node/node.model';
import { NodeService, NodeError } from 'services/node/node.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-node-view',
  templateUrl: './node-view.component.html',
  styleUrls: ['./node-view.component.css']
})
export class NodeViewComponent implements OnInit {
  public nodes: Node[];
  public searchString = [];
  public isLoaded = false;

  constructor(
    private nodeService: NodeService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.fetchNodes();
    setInterval(() => { this.fetchNodes(); }, 1000 * 5);
  }

  getRowHeight(row) {
    return (row.height = 50);
  }

  fetchNodes() {
    console.log('Fetching nodes');
    this.nodeService.getNodes().subscribe((nodes: Node[]) => {
      this.nodes = nodes;
      this.searchString = [...nodes];
      this.isLoaded = true;
    }, (err: NodeError) => {
      this.toastr.error(err.message, 'An error occured');
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.searchString.filter((node: Node) => {
      return node.Description.Hostname.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.nodes = temp;
  }

  public getCPU(nano: string) {
    return (+nano /  1000000000);
  }

  public getRam(mem: string) {
    return Math.round((+mem / 1073741824) * 100) / 100;
  }
}
