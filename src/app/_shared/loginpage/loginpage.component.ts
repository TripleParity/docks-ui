import { Component, OnInit } from '@angular/core';
import {TokenStorage} from '../../_classes/tokenstorage/tokenstorage';
import {AuthService} from '../../_services/auth/auth.service';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})

export class LoginpageComponent implements OnInit {
    constructor(private tokens: TokenStorage, private auth: AuthService) {

    }

  ngOnInit() {

  }

  public onSubmit(){
      console.log("hello from me")
      console.log("hello from in here")
  }

    public hello() {

        // console.log("help me")
    }

}
