import { Component, OnInit } from '@angular/core';
import { Stack } from 'app/models/stack/stack.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-stacks-create',
  templateUrl: './stacks-create.component.html',
  styleUrls: ['./stacks-create.component.css']
})
export class StacksCreateComponent implements OnInit {

  public stack: Stack;
  public alreadyExists = false;
  public genericError = false;
  public submitted = false;
  public fileText;

  constructor(private router: Router) {
    this.stack = {
      name: '',
      serviceCount: 0,
    };
  }

  ngOnInit() {
  }

  uploadFile(event) {
    console.log('Event in file upload ' + event);
    const reader = new FileReader();
    reader.readAsText(event.target.files[0]);
    const me = this;
    reader.onload = function () {
      me.fileText = reader.result;
    };
  }
}
