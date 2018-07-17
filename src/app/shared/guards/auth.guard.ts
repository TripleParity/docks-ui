import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  // TODO(egeldenhuys): Store URL for redirection after login
  // TODO(egeldenhuys): Store login url as constant

  /**
   * Prevent the user from visiting anything other than /login if they are not authenticated.
   * Also prevents visiting /login if they are authenticated
   * @param next
   * @param state
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn()) {
      if (next.url.length !== 0 && next.url[0].path === 'login') {
        this.router.navigate(['/']);
        return false;
      } else {
        return true;
      }
    } else {
      if (next.url.length !== 0 && next.url[0].path === 'login') {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
  }
}
