import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ServiceSpec} from '../../../_models/service/spec.model';
import {ServicesService} from '../../../_services/services/services.service';

@Component({
  selector: 'app-services-operations',
  templateUrl: './services-operations.component.html',
  styleUrls: ['./services-operations.component.css']
})
export class ServicesOperationsComponent implements OnInit {

    public spec: ServiceSpec;
    constructor(private route: ActivatedRoute, private service: ServicesService) {
        this.route.params.subscribe(res => {
            // this
            console.log(res.id);
        });
    }

    ngOnInit() {
    }

}
