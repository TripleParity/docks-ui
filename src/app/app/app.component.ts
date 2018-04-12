import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router : Router) {
  }

  username : string
  password : string

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["index"]);
    }else {
      alert("Invalid credentials");
    }
  }
}
