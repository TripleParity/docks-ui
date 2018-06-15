import { Component, OnInit } from '@angular/core';
import { AuthService, AuthError } from '../_services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  busy = false;
  statusMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  // TODO(egeldenhuys): Form validation
  public login(username: string, password: string): void {
    this.busy = true;

    console.log('LoginComponent: logging in with ' + username + '/' + password);
    this.authService.getToken(username, password).subscribe(
      response => {
        if (response === AuthError.AUTH_OK) {
          this.router.navigate(['/']);
        }
      },
      err => {
        if (err === AuthError.AUTH_ERR) {
          this.statusMessage = 'Invalid username or password';
          this.busy = false;
        }
      }
    );
  }
}
