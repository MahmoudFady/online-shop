import { Subject } from 'rxjs';
import { ICart } from './../shared/models/cart.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly baseUrl = 'http://localhost:3000/api/cart/';
  private cart$ = new Subject<ICart>();
  constructor(private http: HttpClient) {}
  getUserCart() {
    this.http.get<{ cart: ICart }>(this.baseUrl).subscribe({
      next: (response) => {
        this.cart$.next(response.cart);
      },
    });
  }
  addProduct(id: string) {
    const url = `${this.baseUrl}${id}`;
    this.http.post<{ cart: ICart }>(url, {}).subscribe({
      next: (response) => {
        this.cart$.next(response.cart);
      },
    });
  }
  removeProduct(id: string) {
    const url = `${this.baseUrl}${id}`;
    this.http.delete<{ cart: ICart }>(url).subscribe({
      next: (response) => {
        this.cart$.next(response.cart);
      },
    });
  }
  incrPorductQuan(id: string) {
    const url = `${this.baseUrl}increaseQuantity/${id}`;
    this.http.patch<{ cart: ICart }>(url, {}).subscribe({
      next: (response) => {
        this.cart$.next(response.cart);
      },
    });
  }
  decrPorductQuan(id: string) {
    const url = `${this.baseUrl}decreaseQuantity/${id}`;
    this.http.delete<{ cart: ICart }>(url, {}).subscribe({
      next: (response) => {
        this.cart$.next(response.cart);
      },
    });
  }
  getUpdatedCartListener() {
    return this.cart$.asObservable();
  }
}
