import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Node } from 'app/models/node/node.model';
import { NodeService, NodeError } from 'services/node/node.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { interval } from 'rxjs/observable/interval';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-node-view',
  templateUrl: './node-view.component.html',
  styleUrls: ['./node-view.component.css'],
})
export class NodeViewComponent implements OnInit, OnDestroy {
  public nodes: Node[];
  public searchString = [];
  public isLoaded = false;
  private page_start: Subscription;
  private routeSub: Subscription;

  constructor(
    private nodeService: NodeService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchNodes();
    this.page_start = interval(5000).subscribe(() => {
      this.fetchNodes();
    });
    this.routeSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.page_start.unsubscribe();
      }
    });
  }

  ngOnDestroy() {
    this.page_start.unsubscribe();
    this.routeSub.unsubscribe();
  }

  getRowHeight(row) {
    return (row.height = 50);
  }

  fetchNodes() {
    console.log('Fetching nodes');
    this.nodeService.getNodes().subscribe(
      (nodes: Node[]) => {
        this.nodes = nodes;
        this.prettifyNodes();
        this.searchString = [...nodes];
        this.isLoaded = true;
      },
      (err: NodeError) => {
        this.toastr.error(err.message, 'An error occured');
      }
    );
  }

  prettifyNodes() {
    this.nodes.forEach((elem) => {
      elem.Description.Resources.NanoCPUs = this.getCPU(
        elem.Description.Resources.NanoCPUs.toString()
      );
      elem.Description.Resources.MemoryBytes = this.getRam(
        elem.Description.Resources.MemoryBytes.toString()
      );
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.searchString.filter((node: Node) => {
      return (
        node.Description.Hostname.toLowerCase().indexOf(val) !== -1 ||
        node.Status.Addr.toLowerCase().indexOf(val) !== -1 ||
        node.Spec.Availability.toLowerCase().indexOf(val) !== -1 ||
        node.Status.State.toLowerCase().indexOf(val) !== -1 ||
        !val
      );
    });

    // update the rows
    this.nodes = temp;
  }

  public getCPU(nano: string) {
    return +nano / 1000000000;
  }

  public getRam(mem: string) {
    return Math.round((+mem / 1073741824) * 100) / 100;
  }
}
