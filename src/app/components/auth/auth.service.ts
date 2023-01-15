import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './../shared/models/user.model';
import { Subject } from 'rxjs';
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
  isAuth$ = new Subject<boolean>();
  private readonly url = 'http://localhost:3000/api/user/';
  constructor(private http: HttpClient, private router: Router) {}
  signin(user: { email: string; password: string }) {
    return this.http.post<AuthResponse>(`${this.url}signin`, user);
  }
  signup(user: IUser) {
    return this.http.post<AuthResponse>(`${this.url}signup`, user);
  }
  setupSuccessAuth(token: string, userId: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    this.router.navigate(['/user/cart']);
    this.isAuth$.next(true);
  }
  clearSuccessAuth() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
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
  isAuth() {
    return this.isAuth$.asObservable();
  }
}
