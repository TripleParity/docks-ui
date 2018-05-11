import {Component, OnInit} from '@angular/core';
import {TokenStorage} from '../../_classes/tokenstorage/tokenstorage';
import {AuthService} from '../../_services/auth/auth.service';
import {FormGroup} from '@angular/forms';


@Component({
    selector: 'app-loginpage',
    templateUrl: './loginpage.component.html',
    styleUrls: ['./loginpage.component.css']
})

export class LoginpageComponent implements OnInit {
    constructor(private tokens: TokenStorage, private auth: AuthService) {

    }


    private token: FormGroup;

    ngOnInit() {

    }

    public onSubmit() {
        console.log('inSubmit')
        this.auth.getToken('admin', 'admin').subscribe(() => {
            console.log(this.tokens.getToken('auth'));
        }, err => console.log(err));
    }

    public hello() {

        // console.log("help me")
    }

}
