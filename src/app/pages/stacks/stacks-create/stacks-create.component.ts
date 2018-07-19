import { Component, OnInit } from '@angular/core';
import { Stack } from 'app/models/stack/stack.model';
import { Router } from '@angular/router';
import { debug } from 'util';

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
  public file = '';

  constructor(private router: Router) {
    this.stack = {
      name: '',
      serviceCount: 0,
    };
  }

  ngOnInit() {
  }


  public onSelectFile(event) {
    console.log('this.file');
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.file = event.target.result;
        console.log(this.file);
      };
    }
  }
}
