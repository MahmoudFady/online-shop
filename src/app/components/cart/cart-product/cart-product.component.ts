import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from './../cart.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css'],
})
export class CartProductComponent implements OnInit {
  @Input() item!: any;
  constructor(
    private cartService: CartService,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {}
  onIncrQuantity() {
    this.cartService.incrPorductQuan(this.item.product._id);
    this._snackBar.open('one item added to cart', '', {
      panelClass: 'success-bg',
    });
  }
  onDecrQuantity() {
    this.cartService.decrPorductQuan(this.item.product._id);
    this._snackBar.open('one item removed from cart', '', {
      panelClass: 'wran-bg',
    });
  }
  onRemoveProduct() {
    this.cartService.removeProduct(this.item.product._id);
    this.cartService.incrPorductQuan(this.item.product._id);
    this._snackBar.open('one item added to cart', '', {
      panelClass: 'wran-bg',
    });
  }
}
