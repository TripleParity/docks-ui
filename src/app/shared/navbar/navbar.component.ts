import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth/auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.isLoggedIn$ = this.auth.isLogged;
  }

  onLogout() {
    this.auth.logout();
  }
}
