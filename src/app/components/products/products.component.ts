import { AuthService } from './../auth/auth.service';
import { CartService } from './../cart/cart.service';
import { PageEvent } from '@angular/material/paginator';
import { IProduct } from './../shared/models/product.model';
import { ProductService } from './product.service';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { first, map } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Input() query!: string;
  cartProducts: { _id: string; quantity: number }[] = [];
  limit = 8;
  total!: number;
  products: IProduct[] = [];
  loading = false;
  ngOnChanges(changes: SimpleChanges): void {
    this.loading = true;
    this.productService.getProductsByQuery(this.query);
  }
  constructor(
    private authService: AuthService,
    private productService: ProductService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.cartService
      .getUpdatedCartListener()
      .pipe(
        first(),
        map((cart) => {
          if (!cart) return [];
          const products = cart.products;
          const obj = products.map((obj) => {
            return { _id: obj.product._id, quantity: obj.quantity };
          });
          return obj;
        })
      )
      .subscribe({
        next: (cartProducts) => {
          this.cartProducts = cartProducts;
        },
      });
    this.productService.updatedPoductsListener().subscribe({
      next: (response) => {
        this.products = response.products;
        this.total = response.total;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
      },
    });
    this.productService.getProductsByQuery(this.query);
    const { token, userId } = this.authService.getSavedTokenAndUserId();
    if (token && userId) this.cartService.getUserCart();
  }
  onPageChanges($page: PageEvent) {
    let { pageIndex, pageSize } = $page;
    pageIndex += 1;
    this.loading = true;
    this.productService.getProductsByQuery(this.query, pageSize, pageIndex);
  }
  getProductQuantity(id: string) {
    const index = this.cartProducts.findIndex((p) => p._id == id);
    const result = index !== -1 ? this.cartProducts[index].quantity : 0;
    return result;
  }
}
