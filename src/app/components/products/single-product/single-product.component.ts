import { CartService } from './../../cart/cart.service';
import { Router } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { IProduct } from './../../shared/models/product.model';
import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  @Input() product!: IProduct;
  @Input() quantity = 0;
  constructor(
    private _snackBar: MatSnackBar,
    private authService: AuthService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  calcPriceAfterDiscount() {
    const { price, discountPercentage } = this.product;
    const result = price - price * (discountPercentage / 100);
    return result.toFixed(1);
  }
}
