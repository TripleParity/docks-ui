import { Component, OnInit } from '@angular/core';
import { AuthService, AuthError } from '../_services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  statusMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  public login(username: string, password: string) {
    this.statusMessage = 'Logging in...';
    console.log('LoginComponent: logging in with ' + username + '/' + password);
    this.authService.getToken(username, password).subscribe(
      response => {
        if (response === AuthError.AUTH_OK) {
          this.statusMessage = 'Success...';
          this.router.navigate(['/']);
        }
      },
      err => {
        if (err === AuthError.AUTH_ERR) {
          this.statusMessage = 'ERROR: Invalid username or password';
        }
      }
    );
  }
}
