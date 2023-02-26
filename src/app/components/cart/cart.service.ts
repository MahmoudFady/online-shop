import { Subject } from 'rxjs';
import { ICart } from './../shared/models/cart.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly baseUrl = 'http://localhost:3000/api/cart/';
  private cart$ = new Subject<ICart>();
  constructor(private http: HttpClient) {}
  private cartObserver = {
    next: (response: { cart: ICart }) => {
      this.cart$.next(response.cart);
    },
    error: (err: any) => {},
  };
  getUserCart() {
    this.http.get<{ cart: ICart }>(this.baseUrl).subscribe(this.cartObserver);
  }
  getProductInCart() {
    return this.cart$;
  }
  addProduct(id: string) {
    const url = `${this.baseUrl}${id}`;
    this.http.post<{ cart: ICart }>(url, {}).subscribe(this.cartObserver);
  }
  removeProduct(id: string) {
    const url = `${this.baseUrl}${id}`;
    this.http.delete<{ cart: ICart }>(url).subscribe(this.cartObserver);
  }
  incrPorductQuan(id: string) {
    const url = `${this.baseUrl}increaseQuantity/${id}`;
    this.http.patch<{ cart: ICart }>(url, {}).subscribe(this.cartObserver);
  }
  decrPorductQuan(id: string) {
    const url = `${this.baseUrl}decreaseQuantity/${id}`;
    this.http.delete<{ cart: ICart }>(url, {}).subscribe(this.cartObserver);
  }
  getUpdatedCartListener() {
    return this.cart$.asObservable();
  }
}
