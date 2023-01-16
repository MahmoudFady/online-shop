import { Subject } from 'rxjs';
import { IProduct } from './../shared/models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface IProductResponse {
  pageIndex: number;
  limit: number;
  skip: number;
  maxPageIndex: number;
  last: boolean;
  hasPaginate: boolean;
  total: number;
  products: IProduct[];
}
@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly url = 'http://localhost:3000/api/products/';
  private productsResponse$ = new Subject<IProductResponse>();
  constructor(private http: HttpClient) {}
  getProductsByQuery(query: string, limit = 8, pageIndex = 1) {
    const queryParams = `?${query}&limit=${limit}&pageIndex=${pageIndex}`;
    this.http.get<IProductResponse>(`${this.url}${queryParams}`).subscribe({
      next: (response) => {
        this.productsResponse$.next(response);
      },
      error: (err) => {
        this.productsResponse$.error(err);
      },
    });
  }
  getProductById(id: string) {
    return this.http.get<{ product: IProduct }>(`${this.url}${id}`);
  }
  updatedPoductsListener() {
    return this.productsResponse$.asObservable();
  }
}
