import { Component, OnInit } from '@angular/core';
import { Stack } from 'app/models/stack/stack.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { StackService, StackError, StackErrorCode } from 'services/stack/stack.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-stack-edit',
  templateUrl: './stack-edit.component.html',
  styleUrls: ['./stack-edit.component.css'],
})
export class StackEditComponent implements OnInit {
  public stackModel: Stack;
  public fileText = '';

  constructor(
    private router: Router,
    private stackService: StackService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.stackModel = {
        stackName: params.get('stackName'),
        serviceCount: 0,
        stackFile: '',
      };
    });
  }

  uploadFile(event) {
    const reader = new FileReader();
    reader.readAsText(event.target.files[0]);
    const me = this;
    reader.onload = function() {
      me.fileText = reader.result;
      me.stackModel.stackFile = me.fileText;
    };
  }

  submit() {

    this.stackService
      .updateStack(this.stackModel.stackName, btoa(this.stackModel.stackFile))
      .subscribe((result) => {
          this.toastr.success('Stack successfully updated!', 'Success!');
        },
        (err: StackError) => {
          this.toastr.error(err.message, 'Error updating stack');
        }
      );
  }
}
