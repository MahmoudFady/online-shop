import { LoaderService } from './../shared/loader.service';
import { AuthService } from './auth.service';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class AuthInterceptorService implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private loaderService: LoaderService
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.show();
    const { token } = this.authService.getSavedTokenAndUserId();
    const authReq = req.clone({
      headers: req.headers.append('authorization', `bearer ${token}`),
    });
    return next.handle(authReq).pipe(
      finalize(() => {
        this.loaderService.hide();
      })
    );
  }
}
