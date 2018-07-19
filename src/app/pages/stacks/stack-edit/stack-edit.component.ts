import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { StackService } from 'services/stack/stack.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stack-edit',
  templateUrl: './stack-edit.component.html',
  styleUrls: ['./stack-edit.component.css']
})
export class StackEditComponent implements OnInit {

  public selectedStack = '';
  userForm: FormGroup;

  constructor(private stackService: StackService,
    private route: ActivatedRoute, ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.userForm.setValue({
        stackName: params.get('stackName'),
      });
    });
  }

}
