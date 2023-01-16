import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const { token, userId } = this.authService.getSavedTokenAndUserId();
    const promise = new Promise<boolean>((resolve, reject) => {
      if (!token || !userId) {
        this.router.navigate(['/auth', 'signin']);
      }
      resolve(true);
    });
    return promise;
  }
}
