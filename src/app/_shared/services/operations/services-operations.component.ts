import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ServiceSpec} from '../../../_models/service/spec.model';
import {MockService, ServicesService} from '../../../_services';

@Component({
  selector: 'app-services-operations',
  templateUrl: './services-operations.component.html',
  styleUrls: ['./services-operations.component.css']
})
export class ServicesOperationsComponent implements OnInit {

    public spec: ServiceSpec;
    public serviceLog: String;
    constructor(private route: ActivatedRoute, private serviceService: ServicesService, private mock: MockService) {
        this.route.params.subscribe(res => {
            console.log(res.id);
            this.mock.inspectService(res.id).subscribe( serv => {
                this.spec = serv;
                console.log(this.spec);
            });
            this.mock.getServiceLog(res.id).subscribe(serv => {
               this.serviceLog = serv;
            });
        });
    }

    ngOnInit() {
    }

}
