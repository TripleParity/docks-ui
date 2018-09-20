import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { StackService } from 'services/stack/stack.service';
import { ToastrService } from 'ngx-toastr';
import { Service } from 'app/models/service/service.model';

@Component({
  selector: 'app-stack-detail-view',
  templateUrl: './stack-detail-view.component.html',
  styleUrls: ['./stack-detail-view.component.css'],
})
export class StackDetailViewComponent implements OnInit {

  public stackName: string;
  public service: Service;

  constructor(
    private router: Router,
    private stackService: StackService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.stackName = params.get('stackName');
      this.fetchStackServices();
    });
  }

  fetchStackServices() {

  }
}
