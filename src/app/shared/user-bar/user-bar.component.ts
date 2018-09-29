import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router , Event, NavigationEnd, NavigationError} from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
})
export class UserBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  public PageTitle: string;

  constructor(private authService: AuthService, private router: Router, private location: Location) { this.location = location; }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLogged;
    this.getUrl();
  }

  public logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  public getUrl() {
    this.router.events.subscribe( (event: Event) => {

      if (event instanceof NavigationEnd) {
          // A split on /task/list creates ["", "task", "list"]
          // used split to always display heading ie task over specifically displaying task/taskID
          this.PageTitle = location.pathname.split('/')[1];
      }

      if (event instanceof NavigationError) {
          console.log(event.error);
      }
    });
  }
}
