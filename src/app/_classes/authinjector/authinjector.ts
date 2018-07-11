import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { TokenStorage } from '../tokenstorage/tokenstorage';
import { tap } from 'rxjs/operators';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInjector implements HttpInterceptor {
    constructor(private tokens: TokenStorage) {
    }

    // TODO(egeldenhuys): Only inject token if the target is Docks API
    // TODO(egeldenhuys): Check for expired token and reset session
    // TODO(egeldenhuys): Check for unauthenticated error and reset session
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + this.tokens.getToken('auth'))});
        return next.handle(req).pipe(
            tap(
                () => {},
                (err) => {
                    console.error('AuthInjector::intercept(): Something went wrong');
                }
            )
          );
    }
}
