import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './../shared/models/user.model';
import { Subject, retry } from 'rxjs';
import { Router } from '@angular/router';
interface AuthResponse {
  message: string;
  user: IUser;
  token: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuth$ = new Subject<boolean>();
  private readonly url = 'http://localhost:3000/api/user/';
  constructor(private http: HttpClient, private router: Router) {}
  autoLogout() {
    const expireDuration = 1 * 24 * 60 * 60 * 1000;
    const savedAuthDate = localStorage.getItem('authDate') as string;
    const authDate = new Date(savedAuthDate).getTime();
    const authExpiredIn = authDate + expireDuration;
    const logoutIn = authExpiredIn - Date.now();
    let timer;
    if (logoutIn > 0) {
      timer = setTimeout(() => {
        this.logout();
      }, logoutIn);
      return;
    }
    clearTimeout(timer);
    this.logout();
  }
  signin(user: { email: string; password: string }) {
    return this.http.post<AuthResponse>(`${this.url}signin`, user);
  }
  signup(user: IUser) {
    return this.http.post<AuthResponse>(`${this.url}signup`, user);
  }
  setupSuccessAuth(token: string, userId: string) {
    const authDate = new Date() as unknown as string;
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    localStorage.setItem('authDate', authDate);
    this.router.navigate(['/user/cart']);
    this.isAuth$.next(true);
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('authDate');
    this.router.navigate(['/auth/signin']);
    this.isAuth$.next(false);
  }
  isAuthSaved() {
    const result = <boolean>(
      (<unknown>(
        (localStorage.getItem('token') && localStorage.getItem('userId'))
      ))
    );
    return result;
  }
  getSavedTokenAndUserId() {
    return {
      token: localStorage.getItem('token') || '',
      userId: localStorage.getItem('userId') || '',
    };
  }
  isAuthListener() {
    return this.isAuth$.asObservable();
  }
}
