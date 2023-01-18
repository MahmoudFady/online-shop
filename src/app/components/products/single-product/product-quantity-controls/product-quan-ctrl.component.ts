import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CartService } from './../../../cart/cart.service';
import { AuthService } from './../../../auth/auth.service';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-product-quan-ctrls',
  templateUrl: './product-quan-ctrl.component.html',
  styleUrls: ['./product-quan-ctrl.component.css'],
})
export class ProductQuantityCtrls {
  @Input() quantity!: number;
  @Input() productId!: string;
  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}
  onBuy() {
    const { token, userId } = this.authService.getSavedTokenAndUserId();
    if (!token || !userId) {
      this.router.navigate(['/auth', 'signin']);
      return;
    }
    this.cartService.addProduct(this.productId);
    this._snackBar.open('product add to cart', '', {
      panelClass: ['success-bg'],
    });
    this.quantity += 1;
  }
  onIncrQuantity() {
    this.cartService.incrPorductQuan(this.productId);
    this._snackBar.open('one item added', '', {
      panelClass: ['success-bg'],
    });
    this.quantity += 1;
  }
  onDecrQuantity() {
    this.cartService.decrPorductQuan(this.productId);
    this._snackBar.open('one item removed', '', {
      panelClass: ['warn-bg'],
    });
    this.quantity -= 1;
  }
}
